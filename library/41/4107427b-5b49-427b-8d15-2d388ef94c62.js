System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, TextureCube, director, Node, ModelComponent, Material, CameraComponent, Quat, GFXCullMode, EffectAsset, utils, primitives, GFXBufferTextureCopy, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, rotations, readRegions, writeRegions, enableDebug, PreFilterEnvmap;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // 6 faces
  function getMipLevel(size) {
    var level = 0;

    while (size) {
      size >>= 1;
      level++;
    }

    return level;
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      TextureCube = _cc.TextureCube;
      director = _cc.director;
      Node = _cc.Node;
      ModelComponent = _cc.ModelComponent;
      Material = _cc.Material;
      CameraComponent = _cc.CameraComponent;
      Quat = _cc.Quat;
      GFXCullMode = _cc.GFXCullMode;
      EffectAsset = _cc.EffectAsset;
      utils = _cc.utils;
      primitives = _cc.primitives;
      GFXBufferTextureCopy = _cc.GFXBufferTextureCopy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "41074J7W0lCe40VLTiO+Uxi", "pre-filter-envmap", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      rotations = [Quat.fromEuler(new Quat(), 180, 90, 0), // +X
      Quat.fromEuler(new Quat(), 180, -90, 0), // -X
      Quat.fromEuler(new Quat(), 90, 0, 0), // +Y
      Quat.fromEuler(new Quat(), -90, 0, 0), // -Y
      Quat.fromEuler(new Quat(), 180, 0, 0), // +Z
      Quat.fromEuler(new Quat(), 180, 180, 0) // -Z
      ];
      readRegions = [new GFXBufferTextureCopy()];
      readRegions[0].texExtent.depth = 1;
      writeRegions = [new GFXBufferTextureCopy()];
      writeRegions[0].texExtent.depth = 1;
      writeRegions[0].texSubres.layerCount = 6;
      enableDebug = false;

      _export("PreFilterEnvmap", PreFilterEnvmap = (_dec = ccclass("PreFilterEnvmap"), _dec2 = property(EffectAsset), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PreFilterEnvmap, _Component);

        function PreFilterEnvmap() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PreFilterEnvmap);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PreFilterEnvmap)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "effect", _descriptor, _assertThisInitialized(_this));

          _this._camera = null;
          _this._material = null;
          _this._renderTarget = null;
          return _this;
        }

        _createClass(PreFilterEnvmap, [{
          key: "onLoad",
          value: function onLoad() {
            this._camera = this.node.getComponentInChildren(CameraComponent);
            this._renderTarget = this._camera.targetTexture;
            var customStage = 0xbebe; // some random number to avoid colliding with others

            director.root.pipeline.addRenderPass(customStage, this._renderTarget.getGFXWindow().renderPass);
            this._material = new Material();

            this._material.initialize({
              effectAsset: this.effect,
              states: {
                stage: customStage,
                rasterizerState: {
                  cullMode: GFXCullMode.FRONT
                },
                depthStencilState: {
                  depthTest: false,
                  depthWrite: false
                }
              }
            });

            var modelComp = this.node.addComponent(ModelComponent);
            modelComp.mesh = utils.createMesh(primitives.box({
              width: 2,
              height: 2,
              length: 2
            }));
            modelComp.material = this._material;

            if (enableDebug) {
              var testNode = new Node();
              var testMat = new Material();
              testMat.initialize({
                effectName: 'builtin-standard',
                defines: {
                  USE_ALBEDO_MAP: true
                }
              });
              testMat.setProperty('albedoMap', this._renderTarget.getGFXTextureView());
              var testModelComp = testNode.addComponent(ModelComponent);
              testModelComp.mesh = utils.createMesh(primitives.quad());
              testModelComp.material = testMat;
              testNode.parent = this.node.scene;
            }
          }
        }, {
          key: "start",
          value: function start() {
            if (!enableDebug) {
              var skybox = this.node.scene.renderScene.skybox;
              skybox.envmap = this.filter(skybox.envmap); // skybox.isRGBE = false;
            }
          } // WebGL doesn't support using custom mipmap level in framebuffer attachments,
          // so we'll have to do this the hard way (read back and upload again)

        }, {
          key: "filter",
          value: function filter(envmap) {
            this.node.active = true;
            envmap.setMipFilter(TextureCube.Filter.LINEAR);
            var size = envmap.width; // has to be square

            var view = this._camera.camera.view;
            var readRegion = readRegions[0];
            var writeRegion = writeRegions[0];
            var mipLevel = getMipLevel(size);
            var newEnvMap = new TextureCube();
            newEnvMap.reset({
              width: size,
              height: size,
              mipmapLevel: mipLevel
            });

            for (var m = 0; m < mipLevel; m++) {
              // need to resize both window and camera
              view.window.resize(size, size);
              view.camera.resize(size, size);
              readRegion.texExtent.width = readRegion.texExtent.height = size;
              writeRegion.texExtent.width = writeRegion.texExtent.height = size;
              writeRegion.texSubres.baseMipLevel = m;

              this._material.setProperty('roughness', m / mipLevel);

              var length = size * size * 4;
              var buffers = [];

              for (var i = 0; i < 6; i++) {
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
        }]);

        return PreFilterEnvmap;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd3VsaWFuZy9Eb2N1bWVudHMvR2l0SHViL21hdGVyaWFsLXByZXNlbnRhdGlvbi9hc3NldHMvMS1oZWxtZXQvcHJlLWZpbHRlci1lbnZtYXAvcHJlLWZpbHRlci1lbnZtYXAudHMiXSwibmFtZXMiOlsiZ2V0TWlwTGV2ZWwiLCJzaXplIiwibGV2ZWwiLCJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVGV4dHVyZUN1YmUiLCJkaXJlY3RvciIsIk5vZGUiLCJNb2RlbENvbXBvbmVudCIsIk1hdGVyaWFsIiwiQ2FtZXJhQ29tcG9uZW50IiwiUXVhdCIsIkdGWEN1bGxNb2RlIiwiRWZmZWN0QXNzZXQiLCJ1dGlscyIsInByaW1pdGl2ZXMiLCJHRlhCdWZmZXJUZXh0dXJlQ29weSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInJvdGF0aW9ucyIsImZyb21FdWxlciIsInJlYWRSZWdpb25zIiwidGV4RXh0ZW50IiwiZGVwdGgiLCJ3cml0ZVJlZ2lvbnMiLCJ0ZXhTdWJyZXMiLCJsYXllckNvdW50IiwiZW5hYmxlRGVidWciLCJQcmVGaWx0ZXJFbnZtYXAiLCJfY2FtZXJhIiwiX21hdGVyaWFsIiwiX3JlbmRlclRhcmdldCIsIm5vZGUiLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwidGFyZ2V0VGV4dHVyZSIsImN1c3RvbVN0YWdlIiwicm9vdCIsInBpcGVsaW5lIiwiYWRkUmVuZGVyUGFzcyIsImdldEdGWFdpbmRvdyIsInJlbmRlclBhc3MiLCJpbml0aWFsaXplIiwiZWZmZWN0QXNzZXQiLCJlZmZlY3QiLCJzdGF0ZXMiLCJzdGFnZSIsInJhc3Rlcml6ZXJTdGF0ZSIsImN1bGxNb2RlIiwiRlJPTlQiLCJkZXB0aFN0ZW5jaWxTdGF0ZSIsImRlcHRoVGVzdCIsImRlcHRoV3JpdGUiLCJtb2RlbENvbXAiLCJhZGRDb21wb25lbnQiLCJtZXNoIiwiY3JlYXRlTWVzaCIsImJveCIsIndpZHRoIiwiaGVpZ2h0IiwibGVuZ3RoIiwibWF0ZXJpYWwiLCJ0ZXN0Tm9kZSIsInRlc3RNYXQiLCJlZmZlY3ROYW1lIiwiZGVmaW5lcyIsIlVTRV9BTEJFRE9fTUFQIiwic2V0UHJvcGVydHkiLCJnZXRHRlhUZXh0dXJlVmlldyIsInRlc3RNb2RlbENvbXAiLCJxdWFkIiwicGFyZW50Iiwic2NlbmUiLCJza3lib3giLCJyZW5kZXJTY2VuZSIsImVudm1hcCIsImZpbHRlciIsImFjdGl2ZSIsInNldE1pcEZpbHRlciIsIkZpbHRlciIsIkxJTkVBUiIsInZpZXciLCJjYW1lcmEiLCJyZWFkUmVnaW9uIiwid3JpdGVSZWdpb24iLCJtaXBMZXZlbCIsIm5ld0Vudk1hcCIsInJlc2V0IiwibWlwbWFwTGV2ZWwiLCJtIiwid2luZG93IiwicmVzaXplIiwiYmFzZU1pcExldmVsIiwiYnVmZmVycyIsImkiLCJVaW50OEFycmF5Iiwic2V0Um90YXRpb24iLCJyZW5kZXIiLCJkZXZpY2UiLCJjb3B5RnJhbWVidWZmZXJUb0J1ZmZlciIsImZyYW1lYnVmZmVyIiwiYnVmZmVyIiwiY29weUJ1ZmZlcnNUb1RleHR1cmUiLCJnZXRHRlhUZXh0dXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCMEM7QUFFMUMsV0FBU0EsV0FBVCxDQUFzQkMsSUFBdEIsRUFBb0M7QUFDaEMsUUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsV0FBT0QsSUFBUCxFQUFhO0FBQUVBLE1BQUFBLElBQUksS0FBSyxDQUFUO0FBQVlDLE1BQUFBLEtBQUs7QUFBSzs7QUFDckMsV0FBT0EsS0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7OztBQXhCUUMsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxXLE9BQUFBLFc7QUFBNEJDLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxJLE9BQUFBLEk7QUFDbEVDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFB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LENBQVlVLFdBQXpELEVBQXNFUCxPQUFPLENBQUNDLENBQUQsQ0FBUCxDQUFXTyxNQUFqRixFQUF5Ri9FLFdBQXpGO0FBQ0g7O0FBQ0RmLGNBQUFBLFFBQVEsQ0FBQzhCLElBQVQsQ0FBYzZELE1BQWQsQ0FBcUJJLG9CQUFyQixDQUEwQ1QsT0FBMUMsRUFBbURQLFNBQVMsQ0FBQ2lCLGFBQVYsRUFBbkQsRUFBOEU5RSxZQUE5RTtBQUNBdkIsY0FBQUEsSUFBSSxLQUFLLENBQVQ7QUFDSDs7QUFDRCxpQkFBSytCLElBQUwsQ0FBVTRDLE1BQVYsR0FBbUIsS0FBbkI7QUFDQVMsWUFBQUEsU0FBUyxDQUFDUixZQUFWLENBQXVCeEUsV0FBVyxDQUFDeUUsTUFBWixDQUFtQkMsTUFBMUM7QUFDQSxtQkFBT00sU0FBUDtBQUNIOzs7O1FBakZnQ2pGLFM7Ozs7O2lCQUdqQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBUZXh0dXJlQ3ViZSwgUmVuZGVyVGV4dHVyZSwgZGlyZWN0b3IsIE5vZGUsXG4gICAgTW9kZWxDb21wb25lbnQsIE1hdGVyaWFsLCBDYW1lcmFDb21wb25lbnQsIFF1YXQsIEdGWEN1bGxNb2RlLCBFZmZlY3RBc3NldCwgdXRpbHMsIHByaW1pdGl2ZXMsIEdGWEJ1ZmZlclRleHR1cmVDb3B5IH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5jb25zdCByb3RhdGlvbnMgPSBbXG4gICAgUXVhdC5mcm9tRXVsZXIobmV3IFF1YXQoKSwgMTgwLCAgOTAsIDApLCAvLyArWFxuICAgIFF1YXQuZnJvbUV1bGVyKG5ldyBRdWF0KCksIDE4MCwgLTkwLCAwKSwgLy8gLVhcbiAgICBRdWF0LmZyb21FdWxlcihuZXcgUXVhdCgpLCAgOTAsICAgMCwgMCksIC8vICtZXG4gICAgUXVhdC5mcm9tRXVsZXIobmV3IFF1YXQoKSwgLTkwLCAgIDAsIDApLCAvLyAtWVxuICAgIFF1YXQuZnJvbUV1bGVyKG5ldyBRdWF0KCksIDE4MCwgICAwLCAwKSwgLy8gK1pcbiAgICBRdWF0LmZyb21FdWxlcihuZXcgUXVhdCgpLCAxODAsIDE4MCwgMCksIC8vIC1aXG5dO1xuXG5jb25zdCByZWFkUmVnaW9ucyA9IFtuZXcgR0ZYQnVmZmVyVGV4dHVyZUNvcHkoKV07XG5yZWFkUmVnaW9uc1swXS50ZXhFeHRlbnQuZGVwdGggPSAxO1xuXG5jb25zdCB3cml0ZVJlZ2lvbnMgPSBbbmV3IEdGWEJ1ZmZlclRleHR1cmVDb3B5KCldO1xud3JpdGVSZWdpb25zWzBdLnRleEV4dGVudC5kZXB0aCA9IDE7XG53cml0ZVJlZ2lvbnNbMF0udGV4U3VicmVzLmxheWVyQ291bnQgPSA2OyAvLyA2IGZhY2VzXG5cbmZ1bmN0aW9uIGdldE1pcExldmVsIChzaXplOiBudW1iZXIpIHtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuICAgIHdoaWxlIChzaXplKSB7IHNpemUgPj49IDE7IGxldmVsKys7IH1cbiAgICByZXR1cm4gbGV2ZWw7XG59XG5cbmNvbnN0IGVuYWJsZURlYnVnID0gZmFsc2U7XG5cbkBjY2NsYXNzKFwiUHJlRmlsdGVyRW52bWFwXCIpXG5leHBvcnQgY2xhc3MgUHJlRmlsdGVyRW52bWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShFZmZlY3RBc3NldClcbiAgICBwdWJsaWMgZWZmZWN0ID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2NhbWVyYTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9tYXRlcmlhbDogTWF0ZXJpYWwgPSBudWxsO1xuICAgIHByaXZhdGUgX3JlbmRlclRhcmdldDogUmVuZGVyVGV4dHVyZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5fY2FtZXJhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oQ2FtZXJhQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0ID0gdGhpcy5fY2FtZXJhLnRhcmdldFRleHR1cmU7XG4gICAgICAgIGNvbnN0IGN1c3RvbVN0YWdlID0gMHhiZWJlOyAvLyBzb21lIHJhbmRvbSBudW1iZXIgdG8gYXZvaWQgY29sbGlkaW5nIHdpdGggb3RoZXJzXG4gICAgICAgIGRpcmVjdG9yLnJvb3QucGlwZWxpbmUuYWRkUmVuZGVyUGFzcyhjdXN0b21TdGFnZSwgdGhpcy5fcmVuZGVyVGFyZ2V0LmdldEdGWFdpbmRvdygpLnJlbmRlclBhc3MpO1xuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IG5ldyBNYXRlcmlhbCgpO1xuICAgICAgICB0aGlzLl9tYXRlcmlhbC5pbml0aWFsaXplKHtcbiAgICAgICAgICAgIGVmZmVjdEFzc2V0OiB0aGlzLmVmZmVjdCxcbiAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgIHN0YWdlOiBjdXN0b21TdGFnZSxcbiAgICAgICAgICAgICAgICByYXN0ZXJpemVyU3RhdGU6IHsgY3VsbE1vZGU6IEdGWEN1bGxNb2RlLkZST05UIH0sXG4gICAgICAgICAgICAgICAgZGVwdGhTdGVuY2lsU3RhdGU6IHsgZGVwdGhUZXN0OiBmYWxzZSwgZGVwdGhXcml0ZTogZmFsc2UgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb2RlbENvbXAgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgbW9kZWxDb21wLm1lc2ggPSB1dGlscy5jcmVhdGVNZXNoKHByaW1pdGl2ZXMuYm94KHsgd2lkdGg6IDIsIGhlaWdodDogMiwgbGVuZ3RoOiAyIH0pKTtcbiAgICAgICAgbW9kZWxDb21wLm1hdGVyaWFsID0gdGhpcy5fbWF0ZXJpYWw7XG5cbiAgICAgICAgaWYgKGVuYWJsZURlYnVnKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXN0Tm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgICAgICAgICBjb25zdCB0ZXN0TWF0ID0gbmV3IE1hdGVyaWFsKCk7XG4gICAgICAgICAgICB0ZXN0TWF0LmluaXRpYWxpemUoeyBlZmZlY3ROYW1lOiAnYnVpbHRpbi1zdGFuZGFyZCcsIGRlZmluZXM6IHsgVVNFX0FMQkVET19NQVA6IHRydWUgfSB9KTtcbiAgICAgICAgICAgIHRlc3RNYXQuc2V0UHJvcGVydHkoJ2FsYmVkb01hcCcsIHRoaXMuX3JlbmRlclRhcmdldC5nZXRHRlhUZXh0dXJlVmlldygpKTtcbiAgICAgICAgICAgIGNvbnN0IHRlc3RNb2RlbENvbXAgPSB0ZXN0Tm9kZS5hZGRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xuICAgICAgICAgICAgdGVzdE1vZGVsQ29tcC5tZXNoID0gdXRpbHMuY3JlYXRlTWVzaChwcmltaXRpdmVzLnF1YWQoKSk7XG4gICAgICAgICAgICB0ZXN0TW9kZWxDb21wLm1hdGVyaWFsID0gdGVzdE1hdDtcbiAgICAgICAgICAgIHRlc3ROb2RlLnBhcmVudCA9IHRoaXMubm9kZS5zY2VuZSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQgKCkge1xuICAgICAgICBpZiAoIWVuYWJsZURlYnVnKSB7XG4gICAgICAgICAgICBjb25zdCBza3lib3ggPSB0aGlzLm5vZGUuc2NlbmUucmVuZGVyU2NlbmUuc2t5Ym94O1xuICAgICAgICAgICAgc2t5Ym94LmVudm1hcCA9IHRoaXMuZmlsdGVyKHNreWJveC5lbnZtYXApO1xuICAgICAgICAgICAgLy8gc2t5Ym94LmlzUkdCRSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2ViR0wgZG9lc24ndCBzdXBwb3J0IHVzaW5nIGN1c3RvbSBtaXBtYXAgbGV2ZWwgaW4gZnJhbWVidWZmZXIgYXR0YWNobWVudHMsXG4gICAgLy8gc28gd2UnbGwgaGF2ZSB0byBkbyB0aGlzIHRoZSBoYXJkIHdheSAocmVhZCBiYWNrIGFuZCB1cGxvYWQgYWdhaW4pXG4gICAgcHVibGljIGZpbHRlciAoZW52bWFwOiBUZXh0dXJlQ3ViZSkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZW52bWFwLnNldE1pcEZpbHRlcihUZXh0dXJlQ3ViZS5GaWx0ZXIuTElORUFSKTtcbiAgICAgICAgbGV0IHNpemUgPSBlbnZtYXAud2lkdGg7IC8vIGhhcyB0byBiZSBzcXVhcmVcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuX2NhbWVyYS5jYW1lcmEudmlldztcbiAgICAgICAgY29uc3QgcmVhZFJlZ2lvbiA9IHJlYWRSZWdpb25zWzBdO1xuICAgICAgICBjb25zdCB3cml0ZVJlZ2lvbiA9IHdyaXRlUmVnaW9uc1swXTtcbiAgICAgICAgY29uc3QgbWlwTGV2ZWwgPSBnZXRNaXBMZXZlbChzaXplKTtcbiAgICAgICAgY29uc3QgbmV3RW52TWFwID0gbmV3IFRleHR1cmVDdWJlKCk7XG4gICAgICAgIG5ld0Vudk1hcC5yZXNldCh7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUsIG1pcG1hcExldmVsOiBtaXBMZXZlbCB9KTtcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtaXBMZXZlbDsgbSsrKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIHJlc2l6ZSBib3RoIHdpbmRvdyBhbmQgY2FtZXJhXG4gICAgICAgICAgICB2aWV3LndpbmRvdy5yZXNpemUoc2l6ZSwgc2l6ZSk7XG4gICAgICAgICAgICB2aWV3LmNhbWVyYS5yZXNpemUoc2l6ZSwgc2l6ZSk7XG4gICAgICAgICAgICByZWFkUmVnaW9uLnRleEV4dGVudC53aWR0aCA9IHJlYWRSZWdpb24udGV4RXh0ZW50LmhlaWdodCA9IHNpemU7XG4gICAgICAgICAgICB3cml0ZVJlZ2lvbi50ZXhFeHRlbnQud2lkdGggPSB3cml0ZVJlZ2lvbi50ZXhFeHRlbnQuaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgICAgIHdyaXRlUmVnaW9uLnRleFN1YnJlcy5iYXNlTWlwTGV2ZWwgPSBtO1xuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3JvdWdobmVzcycsIG0gLyBtaXBMZXZlbCk7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBzaXplICogc2l6ZSAqIDQ7XG4gICAgICAgICAgICBjb25zdCBidWZmZXJzOiBVaW50OEFycmF5W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyc1tpXSA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhLm5vZGUuc2V0Um90YXRpb24ocm90YXRpb25zW2ldKTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvci5yb290LnBpcGVsaW5lLnJlbmRlcih2aWV3KTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvci5yb290LmRldmljZS5jb3B5RnJhbWVidWZmZXJUb0J1ZmZlcih2aWV3LndpbmRvdy5mcmFtZWJ1ZmZlciwgYnVmZmVyc1tpXS5idWZmZXIsIHJlYWRSZWdpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdG9yLnJvb3QuZGV2aWNlLmNvcHlCdWZmZXJzVG9UZXh0dXJlKGJ1ZmZlcnMsIG5ld0Vudk1hcC5nZXRHRlhUZXh0dXJlKCksIHdyaXRlUmVnaW9ucyk7XG4gICAgICAgICAgICBzaXplID4+PSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbmV3RW52TWFwLnNldE1pcEZpbHRlcihUZXh0dXJlQ3ViZS5GaWx0ZXIuTElORUFSKTtcbiAgICAgICAgcmV0dXJuIG5ld0Vudk1hcDtcbiAgICB9XG59XG4iXX0=