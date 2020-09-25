import { _decorator, Component, TextureCube, RenderTexture, director, Node,
    ModelComponent, Material, CameraComponent, Quat, GFXCullMode, EffectAsset, utils, primitives, GFXBufferTextureCopy } from "cc";
const { ccclass, property } = _decorator;

const rotations = [
    Quat.fromEuler(new Quat(), 180,  90, 0), // +X
    Quat.fromEuler(new Quat(), 180, -90, 0), // -X
    Quat.fromEuler(new Quat(),  90,   0, 0), // +Y
    Quat.fromEuler(new Quat(), -90,   0, 0), // -Y
    Quat.fromEuler(new Quat(), 180,   0, 0), // +Z
    Quat.fromEuler(new Quat(), 180, 180, 0), // -Z
];

const readRegions = [new GFXBufferTextureCopy()];
readRegions[0].texExtent.depth = 1;

const writeRegions = [new GFXBufferTextureCopy()];
writeRegions[0].texExtent.depth = 1;
writeRegions[0].texSubres.layerCount = 6; // 6 faces

function getMipLevel (size: number) {
    let level = 0;
    while (size) { size >>= 1; level++; }
    return level;
}

const enableDebug = false;

@ccclass("PreFilterEnvmap")
export class PreFilterEnvmap extends Component {

    @property(EffectAsset)
    public effect = null;

    private _camera: CameraComponent = null;
    private _material: Material = null;
    private _renderTarget: RenderTexture = null;

    public onLoad () {
        this._camera = this.node.getComponentInChildren(CameraComponent);
        this._renderTarget = this._camera.targetTexture;
        const customStage = 0xbebe; // some random number to avoid colliding with others
        director.root.pipeline.addRenderPass(customStage, this._renderTarget.getGFXWindow().renderPass);
        this._material = new Material();
        this._material.initialize({
            effectAsset: this.effect,
            states: {
                stage: customStage,
                rasterizerState: { cullMode: GFXCullMode.FRONT },
                depthStencilState: { depthTest: false, depthWrite: false },
            },
        });
        const modelComp = this.node.addComponent(ModelComponent);
        modelComp.mesh = utils.createMesh(primitives.box({ width: 2, height: 2, length: 2 }));
        modelComp.material = this._material;

        if (enableDebug) {
            const testNode = new Node();
            const testMat = new Material();
            testMat.initialize({ effectName: 'builtin-standard', defines: { USE_ALBEDO_MAP: true } });
            testMat.setProperty('albedoMap', this._renderTarget.getGFXTextureView());
            const testModelComp = testNode.addComponent(ModelComponent);
            testModelComp.mesh = utils.createMesh(primitives.quad());
            testModelComp.material = testMat;
            testNode.parent = this.node.scene as any;
        }
    }

    public start () {
        if (!enableDebug) {
            const skybox = this.node.scene.renderScene.skybox;
            skybox.envmap = this.filter(skybox.envmap);
            // skybox.isRGBE = false;
        }
    }

    // WebGL doesn't support using custom mipmap level in framebuffer attachments,
    // so we'll have to do this the hard way (read back and upload again)
    public filter (envmap: TextureCube) {
        this.node.active = true;
        envmap.setMipFilter(TextureCube.Filter.LINEAR);
        let size = envmap.width; // has to be square
        const view = this._camera.camera.view;
        const readRegion = readRegions[0];
        const writeRegion = writeRegions[0];
        const mipLevel = getMipLevel(size);
        const newEnvMap = new TextureCube();
        newEnvMap.reset({ width: size, height: size, mipmapLevel: mipLevel });
        for (let m = 0; m < mipLevel; m++) {
            // need to resize both window and camera
            view.window.resize(size, size);
            view.camera.resize(size, size);
            readRegion.texExtent.width = readRegion.texExtent.height = size;
            writeRegion.texExtent.width = writeRegion.texExtent.height = size;
            writeRegion.texSubres.baseMipLevel = m;
            this._material.setProperty('roughness', m / mipLevel);
            const length = size * size * 4;
            const buffers: Uint8Array[] = [];
            for (let i = 0; i < 6; i++) {
                buffers[i] = new Uint8Array(length);
                this._camera.node.setRotation(rotations[i]);
                director.root.pipeline.render(view);
                director.root.device.copyFramebufferToBuffer(view.window.framebuffer, buffers[i].buffer, readRegions);
            }
            director.root.device.copyBuffersToTexture(buffers, newEnvMap.getGFXTexture(), writeRegions);
            size >>= 1;
        }
        this.node.active = false;
        newEnvMap.setMipFilter(TextureCube.Filter.LINEAR);
        return newEnvMap;
    }
}
