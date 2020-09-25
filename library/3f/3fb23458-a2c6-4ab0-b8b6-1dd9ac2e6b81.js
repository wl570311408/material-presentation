System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, ModelComponent, Texture2D, SpriteFrame, Material, utils, builtinResMgr, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, material, enableBlend, default_uvs, mesh, vbInfo, vbuffer, UnlitQuadComponent;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

  function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      ModelComponent = _cc.ModelComponent;
      Texture2D = _cc.Texture2D;
      SpriteFrame = _cc.SpriteFrame;
      Material = _cc.Material;
      utils = _cc.utils;
      builtinResMgr = _cc.builtinResMgr;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "3fb23RYosZKsLi2HdmsLmuB", "unlit-quad", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      material = null;
      enableBlend = {
        blendState: {
          targets: [{
            blend: true,
            blendSrc: cc.GFXBlendFactor.SRC_ALPHA,
            blendDst: cc.GFXBlendFactor.ONE_MINUS_SRC_ALPHA,
            blendDstAlpha: cc.GFXBlendFactor.ONE_MINUS_SRC_ALPHA
          }]
        }
      };
      default_uvs = [0, 1, 1, 1, 0, 0, 1, 0];
      mesh = utils.createMesh({
        positions: [-0.5, -0.5, 0, // bottom-left
        0.5, -0.5, 0, // bottom-right
        -0.5, 0.5, 0, // top-left
        0.5, 0.5, 0 // top-right
        ],
        uvs: default_uvs,
        indices: [0, 1, 2, 2, 1, 3],
        minPos: new Vec3(-0.5, -0.5, 0),
        maxPos: new Vec3(0.5, 0.5, 0)
      });
      vbInfo = mesh.struct.vertexBundles[0].view;
      vbuffer = mesh.data.buffer.slice(vbInfo.offset, vbInfo.offset + vbInfo.length);

      _export("UnlitQuadComponent", UnlitQuadComponent = (_dec = ccclass('UnlitQuadComponent'), _dec2 = property(SpriteFrame), _dec3 = property(Texture2D), _dec4 = property({
        override: true,
        visible: false
      }), _dec5 = property({
        override: true,
        visible: false
      }), _dec6 = property({
        type: Texture2D
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ModelComponent) {
        _inherits(UnlitQuadComponent, _ModelComponent);

        function UnlitQuadComponent() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UnlitQuadComponent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UnlitQuadComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_sprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_texture", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_transparent", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UnlitQuadComponent, [{
          key: "onLoad",
          value: function onLoad() {
            if (!material) {
              material = new Material();
              material.initialize({
                effectName: 'builtin-unlit',
                technique: 0,
                defines: {
                  USE_TEXTURE: true
                },
                states: {
                  rasterizerState: {
                    cullMode: cc.GFXCullMode.NONE
                  }
                }
              });
            }

            this.material = material;
            this._mesh = mesh;

            _get(_getPrototypeOf(UnlitQuadComponent.prototype), "onLoad", this).call(this);

            this.updateTexture();
            this.transparent = this._transparent;
          }
        }, {
          key: "updateTexture",
          value: function updateTexture() {
            // update pass
            var pass = this.material && this.material.passes[0];
            var binding = pass && pass.getBinding('mainTexture');

            if (typeof binding !== 'number') {
              return;
            }

            var target = this._sprite ? this._sprite : this._texture ? this._texture : builtinResMgr.get('grey-texture');
            pass.bindTextureView(binding, target.getGFXTextureView()); // update UV (handle atlas)

            var model = this.model && this.model.getSubModel(0);
            var ia = model && model.inputAssembler;

            if (!ia) {
              return;
            }

            var uv = default_uvs;

            if (this._sprite) {
              this._sprite._calculateUV();

              uv = this._sprite.uv;
            }

            ia.updateVertexAttr(vbuffer, cc.GFXAttributeName.ATTR_TEX_COORD, uv);
          }
        }, {
          key: "sharedMaterials",
          set: function set(val) {
            _set(_getPrototypeOf(UnlitQuadComponent.prototype), "sharedMaterials", val, this, true);
          },
          get: function get() {
            return _get(_getPrototypeOf(UnlitQuadComponent.prototype), "sharedMaterials", this);
          }
        }, {
          key: "mesh",
          set: function set(val) {
            _set(_getPrototypeOf(UnlitQuadComponent.prototype), "mesh", val, this, true);
          },
          get: function get() {
            return _get(_getPrototypeOf(UnlitQuadComponent.prototype), "mesh", this);
          }
        }, {
          key: "texture",
          set: function set(val) {
            this._texture = val;
            this.updateTexture();
          },
          get: function get() {
            return this._texture;
          }
        }, {
          key: "spriteFrame",
          set: function set(val) {
            this._sprite = val;
            this.updateTexture();
          },
          get: function get() {
            return this._sprite;
          }
        }, {
          key: "transparent",
          set: function set(val) {
            this._transparent = val;
            this.material.overridePipelineStates(val ? enableBlend : {});
          },
          get: function get() {
            return this._transparent;
          }
        }]);

        return UnlitQuadComponent;
      }(ModelComponent), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_texture", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "texture"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_transparent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "transparent", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "transparent"), _class2.prototype)), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd3VsaWFuZy9Eb2N1bWVudHMvR2l0SHViL21hdGVyaWFsLXByZXNlbnRhdGlvbi9hc3NldHMvc2NyaXB0cy91bmxpdC1xdWFkLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNb2RlbENvbXBvbmVudCIsIlRleHR1cmUyRCIsIlNwcml0ZUZyYW1lIiwiTWF0ZXJpYWwiLCJ1dGlscyIsImJ1aWx0aW5SZXNNZ3IiLCJWZWMzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwibWF0ZXJpYWwiLCJlbmFibGVCbGVuZCIsImJsZW5kU3RhdGUiLCJ0YXJnZXRzIiwiYmxlbmQiLCJibGVuZFNyYyIsImNjIiwiR0ZYQmxlbmRGYWN0b3IiLCJTUkNfQUxQSEEiLCJibGVuZERzdCIsIk9ORV9NSU5VU19TUkNfQUxQSEEiLCJibGVuZERzdEFscGhhIiwiZGVmYXVsdF91dnMiLCJtZXNoIiwiY3JlYXRlTWVzaCIsInBvc2l0aW9ucyIsInV2cyIsImluZGljZXMiLCJtaW5Qb3MiLCJtYXhQb3MiLCJ2YkluZm8iLCJzdHJ1Y3QiLCJ2ZXJ0ZXhCdW5kbGVzIiwidmlldyIsInZidWZmZXIiLCJkYXRhIiwiYnVmZmVyIiwic2xpY2UiLCJvZmZzZXQiLCJsZW5ndGgiLCJVbmxpdFF1YWRDb21wb25lbnQiLCJvdmVycmlkZSIsInZpc2libGUiLCJ0eXBlIiwiaW5pdGlhbGl6ZSIsImVmZmVjdE5hbWUiLCJ0ZWNobmlxdWUiLCJkZWZpbmVzIiwiVVNFX1RFWFRVUkUiLCJzdGF0ZXMiLCJyYXN0ZXJpemVyU3RhdGUiLCJjdWxsTW9kZSIsIkdGWEN1bGxNb2RlIiwiTk9ORSIsIl9tZXNoIiwidXBkYXRlVGV4dHVyZSIsInRyYW5zcGFyZW50IiwiX3RyYW5zcGFyZW50IiwicGFzcyIsInBhc3NlcyIsImJpbmRpbmciLCJnZXRCaW5kaW5nIiwidGFyZ2V0IiwiX3Nwcml0ZSIsIl90ZXh0dXJlIiwiZ2V0IiwiYmluZFRleHR1cmVWaWV3IiwiZ2V0R0ZYVGV4dHVyZVZpZXciLCJtb2RlbCIsImdldFN1Yk1vZGVsIiwiaWEiLCJpbnB1dEFzc2VtYmxlciIsInV2IiwiX2NhbGN1bGF0ZVVWIiwidXBkYXRlVmVydGV4QXR0ciIsIkdGWEF0dHJpYnV0ZU5hbWUiLCJBVFRSX1RFWF9DT09SRCIsInZhbCIsIm92ZXJyaWRlUGlwZWxpbmVTdGF0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLGEsT0FBQUEsYTtBQUFlQyxNQUFBQSxJLE9BQUFBLEk7Ozs7OztBQUNyRkMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTtBQUViQyxNQUFBQSxRLEdBQTRCLEk7QUFDMUJDLE1BQUFBLFcsR0FBYztBQUNoQkMsUUFBQUEsVUFBVSxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxDQUFFO0FBQ3JCQyxZQUFBQSxLQUFLLEVBQUUsSUFEYztBQUVyQkMsWUFBQUEsUUFBUSxFQUFFQyxFQUFFLENBQUNDLGNBQUgsQ0FBa0JDLFNBRlA7QUFHckJDLFlBQUFBLFFBQVEsRUFBRUgsRUFBRSxDQUFDQyxjQUFILENBQWtCRyxtQkFIUDtBQUlyQkMsWUFBQUEsYUFBYSxFQUFFTCxFQUFFLENBQUNDLGNBQUgsQ0FBa0JHO0FBSlosV0FBRjtBQUFYO0FBREksTztBQVNkRSxNQUFBQSxXLEdBQWMsQ0FDaEIsQ0FEZ0IsRUFDYixDQURhLEVBRWhCLENBRmdCLEVBRWIsQ0FGYSxFQUdoQixDQUhnQixFQUdiLENBSGEsRUFJaEIsQ0FKZ0IsRUFJYixDQUphLEM7QUFNZEMsTUFBQUEsSSxHQUFPbEIsS0FBSyxD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TyxLQUFLUSxPQUFaO0FBQ0g7Ozs0QkFNZ0JjLEcsRUFBYztBQUMzQixpQkFBS3BCLFlBQUwsR0FBb0JvQixHQUFwQjtBQUNBLGlCQUFLbkUsUUFBTCxDQUFjb0Usc0JBQWQsQ0FBcUNELEdBQUcsR0FBR2xFLFdBQUgsR0FBaUIsRUFBekQ7QUFDSCxXOzhCQUNrQjtBQUNmLG1CQUFPLEtBQUs4QyxZQUFaO0FBQ0g7Ozs7UUFwRG1DeEQsYzs7Ozs7aUJBR04sSTs7Ozs7OztpQkFHRCxJOzt5ckJBb0M1QlEsUTs7Ozs7aUJBQ2MsSzs7dUVBRWRBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBNb2RlbENvbXBvbmVudCwgVGV4dHVyZTJELCBTcHJpdGVGcmFtZSwgTWF0ZXJpYWwsIHV0aWxzLCBidWlsdGluUmVzTWdyLCBWZWMzLCByZW5kZXJlciB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmxldCBtYXRlcmlhbDogTWF0ZXJpYWwgfCBudWxsID0gbnVsbDtcbmNvbnN0IGVuYWJsZUJsZW5kID0ge1xuICAgIGJsZW5kU3RhdGU6IHsgdGFyZ2V0czogWyB7XG4gICAgICAgIGJsZW5kOiB0cnVlLFxuICAgICAgICBibGVuZFNyYzogY2MuR0ZYQmxlbmRGYWN0b3IuU1JDX0FMUEhBLFxuICAgICAgICBibGVuZERzdDogY2MuR0ZYQmxlbmRGYWN0b3IuT05FX01JTlVTX1NSQ19BTFBIQSxcbiAgICAgICAgYmxlbmREc3RBbHBoYTogY2MuR0ZYQmxlbmRGYWN0b3IuT05FX01JTlVTX1NSQ19BTFBIQVxuICAgIH0gXSB9XG59O1xuXG5jb25zdCBkZWZhdWx0X3V2cyA9IFtcbiAgICAwLCAxLFxuICAgIDEsIDEsXG4gICAgMCwgMCxcbiAgICAxLCAwLFxuXTtcbmNvbnN0IG1lc2ggPSB1dGlscy5jcmVhdGVNZXNoKHtcbiAgICBwb3NpdGlvbnM6IFtcbiAgICAgICAgLTAuNSwgLTAuNSwgMCwgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgIDAuNSwgLTAuNSwgMCwgLy8gYm90dG9tLXJpZ2h0XG4gICAgICAgIC0wLjUsICAwLjUsIDAsIC8vIHRvcC1sZWZ0XG4gICAgICAgICAwLjUsICAwLjUsIDAsIC8vIHRvcC1yaWdodFxuICAgIF0sXG4gICAgdXZzOiBkZWZhdWx0X3V2cyxcbiAgICBpbmRpY2VzOiBbIDAsIDEsIDIsIDIsIDEsIDMgXSxcbiAgICBtaW5Qb3M6IG5ldyBWZWMzKC0wLjUsIC0wLjUsIDApLFxuICAgIG1heFBvczogbmV3IFZlYzMoIDAuNSwgIDAuNSwgMCksXG59KTtcbmNvbnN0IHZiSW5mbyA9IG1lc2guc3RydWN0LnZlcnRleEJ1bmRsZXNbMF0udmlldztcbmNvbnN0IHZidWZmZXIgPSBtZXNoLmRhdGEuYnVmZmVyLnNsaWNlKHZiSW5mby5vZmZzZXQsIHZiSW5mby5vZmZzZXQgKyB2YkluZm8ubGVuZ3RoKTtcblxuQGNjY2xhc3MoJ1VubGl0UXVhZENvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgVW5saXRRdWFkQ29tcG9uZW50IGV4dGVuZHMgTW9kZWxDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxuICAgIF9zcHJpdGU6IFNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoVGV4dHVyZTJEKVxuICAgIF90ZXh0dXJlOiBUZXh0dXJlMkQgfCBudWxsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IG92ZXJyaWRlOiB0cnVlLCB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIHNldCBzaGFyZWRNYXRlcmlhbHMgKHZhbCkge1xuICAgICAgICBzdXBlci5zaGFyZWRNYXRlcmlhbHMgPSB2YWw7XG4gICAgfVxuICAgIGdldCBzaGFyZWRNYXRlcmlhbHMgKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuc2hhcmVkTWF0ZXJpYWxzO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IG92ZXJyaWRlOiB0cnVlLCB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIHNldCBtZXNoICh2YWwpIHtcbiAgICAgICAgc3VwZXIubWVzaCA9IHZhbDtcbiAgICB9XG4gICAgZ2V0IG1lc2ggKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIubWVzaDtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBUZXh0dXJlMkQgfSlcbiAgICBzZXQgdGV4dHVyZSAodmFsKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSgpO1xuICAgIH1cbiAgICBnZXQgdGV4dHVyZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUZyYW1lIH0pXG4gICAgc2V0IHNwcml0ZUZyYW1lICh2YWwpIHtcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoKTtcbiAgICB9XG4gICAgZ2V0IHNwcml0ZUZyYW1lICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBfdHJhbnNwYXJlbnQgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNldCB0cmFuc3BhcmVudCAodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcGFyZW50ID0gdmFsO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLm92ZXJyaWRlUGlwZWxpbmVTdGF0ZXModmFsID8gZW5hYmxlQmxlbmQgOiB7fSk7XG4gICAgfVxuICAgIGdldCB0cmFuc3BhcmVudCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICBtYXRlcmlhbCA9IG5ldyBNYXRlcmlhbCgpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuaW5pdGlhbGl6ZSh7XG4gICAgICAgICAgICAgICAgZWZmZWN0TmFtZTogJ2J1aWx0aW4tdW5saXQnLFxuICAgICAgICAgICAgICAgIHRlY2huaXF1ZTogMCxcbiAgICAgICAgICAgICAgICBkZWZpbmVzOiB7IFVTRV9URVhUVVJFOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgc3RhdGVzOiB7IHJhc3Rlcml6ZXJTdGF0ZTogeyBjdWxsTW9kZTogY2MuR0ZYQ3VsbE1vZGUuTk9ORSB9IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAgICAgdGhpcy5fbWVzaCA9IG1lc2g7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoKTtcbiAgICAgICAgdGhpcy50cmFuc3BhcmVudCA9IHRoaXMuX3RyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIHVwZGF0ZVRleHR1cmUgKCkge1xuICAgICAgICAvLyB1cGRhdGUgcGFzc1xuICAgICAgICBjb25zdCBwYXNzID0gdGhpcy5tYXRlcmlhbCAmJiB0aGlzLm1hdGVyaWFsLnBhc3Nlc1swXTtcbiAgICAgICAgY29uc3QgYmluZGluZyA9IHBhc3MgJiYgcGFzcy5nZXRCaW5kaW5nKCdtYWluVGV4dHVyZScpO1xuICAgICAgICBpZiAodHlwZW9mIGJpbmRpbmcgIT09ICdudW1iZXInKSB7IHJldHVybjsgfVxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9zcHJpdGUgPyB0aGlzLl9zcHJpdGUgOiB0aGlzLl90ZXh0dXJlID8gdGhpcy5fdGV4dHVyZSA6IGJ1aWx0aW5SZXNNZ3IuZ2V0PFRleHR1cmUyRD4oJ2dyZXktdGV4dHVyZScpO1xuICAgICAgICBwYXNzLmJpbmRUZXh0dXJlVmlldyhiaW5kaW5nLCB0YXJnZXQuZ2V0R0ZYVGV4dHVyZVZpZXcoKSk7XG4gICAgICAgIC8vIHVwZGF0ZSBVViAoaGFuZGxlIGF0bGFzKVxuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5nZXRTdWJNb2RlbCgwKTtcbiAgICAgICAgY29uc3QgaWEgPSBtb2RlbCAmJiBtb2RlbC5pbnB1dEFzc2VtYmxlcjtcbiAgICAgICAgaWYgKCFpYSkgeyByZXR1cm47IH1cbiAgICAgICAgbGV0IHV2ID0gZGVmYXVsdF91dnM7XG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGUpIHsgdGhpcy5fc3ByaXRlLl9jYWxjdWxhdGVVVigpOyB1diA9IHRoaXMuX3Nwcml0ZS51djsgfVxuICAgICAgICBpYS51cGRhdGVWZXJ0ZXhBdHRyKHZidWZmZXIsIGNjLkdGWEF0dHJpYnV0ZU5hbWUuQVRUUl9URVhfQ09PUkQsIHV2KTtcbiAgICB9XG59XG4iXX0=