System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, GFXPrimitiveMode, Material, GFXAttributeName, utils, Color, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, requireComponent, executeInEditMode, v3_1, v3_2, WireframeVisualizer;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ModelComponent = _cc.ModelComponent;
      GFXPrimitiveMode = _cc.GFXPrimitiveMode;
      Material = _cc.Material;
      GFXAttributeName = _cc.GFXAttributeName;
      utils = _cc.utils;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "bee197Tl6pFR41+VOXjwWGf", "wireframe-visualizer", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;
      executeInEditMode = _decorator.executeInEditMode;
      v3_1 = new Vec3();
      v3_2 = new Vec3();

      _export("WireframeVisualizer", WireframeVisualizer = (_dec = ccclass('WireframeVisualizer'), _dec2 = requireComponent(ModelComponent), _dec3 = property(ModelComponent), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(WireframeVisualizer, _Component);

        function WireframeVisualizer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WireframeVisualizer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WireframeVisualizer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "extrude", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "primitiveIndex", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "color", _descriptor4, _assertThisInitialized(_this));

          _this._material = new Material();
          return _this;
        }

        _createClass(WireframeVisualizer, [{
          key: "start",
          value: function start() {
            this._material.initialize({
              effectName: 'builtin-unlit',
              defines: {
                USE_COLOR: true
              },
              states: {
                primitive: GFXPrimitiveMode.LINE_LIST
              }
            });

            this.refresh();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var comp = this.node.getComponent(ModelComponent);

            if (!this.target || !comp) {
              return;
            }

            var positions = this.target.mesh.readAttribute(this.primitiveIndex, GFXAttributeName.ATTR_POSITION);
            var normals = this.target.mesh.readAttribute(this.primitiveIndex, GFXAttributeName.ATTR_NORMAL);
            var indices = this.target.mesh.readIndices(this.primitiveIndex);
            comp.material = this._material;
            comp.material.setProperty('color', this.color);
            comp.mesh = utils.createMesh({
              positions: this._generateWireframeVB(positions, normals),
              indices: this._generateWireframeIB(indices),
              primitiveMode: cc.GFXPrimitiveMode.LINE_LIST,
              minPos: this.target.mesh.minPosition,
              maxPos: this.target.mesh.maxPosition
            });
          }
        }, {
          key: "_generateWireframeVB",
          value: function _generateWireframeVB(positions, normals) {
            var len = positions.length / 3;
            var res = [];

            for (var i = 0; i < len; i++) {
              Vec3.fromArray(v3_1, positions, i * 3);
              Vec3.fromArray(v3_2, normals, i * 3);
              Vec3.scaleAndAdd(v3_1, v3_1, Vec3.normalize(v3_2, v3_2), this.extrude);
              Vec3.toArray(res, v3_1, i * 3);
            }

            return res;
          }
        }, {
          key: "_generateWireframeIB",
          value: function _generateWireframeIB(src) {
            var res = [];
            var len = src.length / 3;

            for (var i = 0; i < len; i++) {
              var a = src[i * 3 + 0];
              var b = src[i * 3 + 1];
              var c = src[i * 3 + 2];
              res.push(a, b, b, c, c, a);
            }

            return res;
          }
        }, {
          key: "apply",
          set: function set(val) {
            this.refresh();
          },
          get: function get() {
            return false;
          }
        }]);

        return WireframeVisualizer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "extrude", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.001;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "primitiveIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "color", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "apply", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "apply"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd3VsaWFuZy9Eb2N1bWVudHMvR2l0SHViL21hdGVyaWFsLXByZXNlbnRhdGlvbi9hc3NldHMvc2NyaXB0cy93aXJlZnJhbWUtdmlzdWFsaXplci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTW9kZWxDb21wb25lbnQiLCJHRlhQcmltaXRpdmVNb2RlIiwiTWF0ZXJpYWwiLCJHRlhBdHRyaWJ1dGVOYW1lIiwidXRpbHMiLCJDb2xvciIsIlZlYzMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJyZXF1aXJlQ29tcG9uZW50IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJ2M18xIiwidjNfMiIsIldpcmVmcmFtZVZpc3VhbGl6ZXIiLCJfbWF0ZXJpYWwiLCJpbml0aWFsaXplIiwiZWZmZWN0TmFtZSIsImRlZmluZXMiLCJVU0VfQ09MT1IiLCJzdGF0ZXMiLCJwcmltaXRpdmUiLCJMSU5FX0xJU1QiLCJyZWZyZXNoIiwiY29tcCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJ0YXJnZXQiLCJwb3NpdGlvbnMiLCJtZXNoIiwicmVhZEF0dHJpYnV0ZSIsInByaW1pdGl2ZUluZGV4IiwiQVRUUl9QT1NJVElPTiIsIm5vcm1hbHMiLCJBVFRSX05PUk1BTCIsImluZGljZXMiLCJyZWFkSW5kaWNlcyIsIm1hdGVyaWFsIiwic2V0UHJvcGVydHkiLCJjb2xvciIsImNyZWF0ZU1lc2giLCJfZ2VuZXJhdGVXaXJlZnJhbWVWQiIsIl9nZW5lcmF0ZVdpcmVmcmFtZUlCIiwicHJpbWl0aXZlTW9kZSIsImNjIiwibWluUG9zIiwibWluUG9zaXRpb24iLCJtYXhQb3MiLCJtYXhQb3NpdGlvbiIsImxlbiIsImxlbmd0aCIsInJlcyIsImkiLCJmcm9tQXJyYXkiLCJzY2FsZUFuZEFkZCIsIm5vcm1hbGl6ZSIsImV4dHJ1ZGUiLCJ0b0FycmF5Iiwic3JjIiwiYSIsImIiLCJjIiwicHVzaCIsInZhbCIsIldISVRFIiwiY2xvbmUiXSwibWFwcGlu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R0FBUSxDQUFULENBQWI7QUFDQUQsY0FBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVNILENBQVQsRUFBWUMsQ0FBWixFQUFlQSxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQkEsQ0FBckIsRUFBd0JGLENBQXhCO0FBQ0g7O0FBQ0QsbUJBQU9SLEdBQVA7QUFDSDs7OzRCQXZEVVksRyxFQUFLO0FBQ1osaUJBQUt4QyxPQUFMO0FBQ0gsVzs4QkFDWTtBQUNULG1CQUFPLEtBQVA7QUFDSDs7OztRQXRCb0N2QixTOzs7OztpQkFHNUIsSTs7a0ZBRVJTLFE7Ozs7O2lCQUNTLEs7O3lGQUVUQSxROzs7OztpQkFDZ0IsQzs7Z0ZBRWhCQSxROzs7OztpQkFDT0gsS0FBSyxDQUFDMEQsS0FBTixDQUFZQyxLQUFaLEU7O2lFQUlQeEQsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTW9kZWxDb21wb25lbnQsIEdGWFByaW1pdGl2ZU1vZGUsIE1hdGVyaWFsLCBHRlhBdHRyaWJ1dGVOYW1lLCB1dGlscywgQ29sb3IsIFZlYzMgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gX2RlY29yYXRvcjtcblxuY29uc3QgdjNfMSA9IG5ldyBWZWMzKCk7XG5jb25zdCB2M18yID0gbmV3IFZlYzMoKTtcblxuQGNjY2xhc3MoJ1dpcmVmcmFtZVZpc3VhbGl6ZXInKVxuQHJlcXVpcmVDb21wb25lbnQoTW9kZWxDb21wb25lbnQpXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBjbGFzcyBXaXJlZnJhbWVWaXN1YWxpemVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShNb2RlbENvbXBvbmVudClcbiAgICB0YXJnZXQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZXh0cnVkZSA9IDAuMDAxO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpbWl0aXZlSW5kZXggPSAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgY29sb3IgPSBDb2xvci5XSElURS5jbG9uZSgpO1xuXG4gICAgX21hdGVyaWFsID0gbmV3IE1hdGVyaWFsKCk7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzZXQgYXBwbHkgKHZhbCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgZ2V0IGFwcGx5ICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuaW5pdGlhbGl6ZSh7XG4gICAgICAgICAgICBlZmZlY3ROYW1lOiAnYnVpbHRpbi11bmxpdCcsXG4gICAgICAgICAgICBkZWZpbmVzOiB7IFVTRV9DT0xPUjogdHJ1ZSB9LFxuICAgICAgICAgICAgc3RhdGVzOiB7IHByaW1pdGl2ZTogR0ZYUHJpbWl0aXZlTW9kZS5MSU5FX0xJU1QgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCAoKSB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCB8fCAhY29tcCkgeyByZXR1cm47IH1cbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy50YXJnZXQubWVzaC5yZWFkQXR0cmlidXRlKHRoaXMucHJpbWl0aXZlSW5kZXgsIEdGWEF0dHJpYnV0ZU5hbWUuQVRUUl9QT1NJVElPTik7XG4gICAgICAgIGNvbnN0IG5vcm1hbHMgPSB0aGlzLnRhcmdldC5tZXNoLnJlYWRBdHRyaWJ1dGUodGhpcy5wcmltaXRpdmVJbmRleCwgR0ZYQXR0cmlidXRlTmFtZS5BVFRSX05PUk1BTCk7XG4gICAgICAgIGNvbnN0IGluZGljZXMgPSB0aGlzLnRhcmdldC5tZXNoLnJlYWRJbmRpY2VzKHRoaXMucHJpbWl0aXZlSW5kZXgpO1xuICAgICAgICBjb21wLm1hdGVyaWFsID0gdGhpcy5fbWF0ZXJpYWw7XG4gICAgICAgIGNvbXAubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2NvbG9yJywgdGhpcy5jb2xvcik7XG4gICAgICAgIGNvbXAubWVzaCA9IHV0aWxzLmNyZWF0ZU1lc2goe1xuICAgICAgICAgICAgcG9zaXRpb25zOiB0aGlzLl9nZW5lcmF0ZVdpcmVmcmFtZVZCKHBvc2l0aW9ucywgbm9ybWFscyksXG4gICAgICAgICAgICBpbmRpY2VzOiB0aGlzLl9nZW5lcmF0ZVdpcmVmcmFtZUlCKGluZGljZXMpLFxuICAgICAgICAgICAgcHJpbWl0aXZlTW9kZTogY2MuR0ZYUHJpbWl0aXZlTW9kZS5MSU5FX0xJU1QsXG4gICAgICAgICAgICBtaW5Qb3M6IHRoaXMudGFyZ2V0Lm1lc2gubWluUG9zaXRpb24sXG4gICAgICAgICAgICBtYXhQb3M6IHRoaXMudGFyZ2V0Lm1lc2gubWF4UG9zaXRpb24sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZW5lcmF0ZVdpcmVmcmFtZVZCIChwb3NpdGlvbnM6IEZsb2F0MzJBcnJheSwgbm9ybWFsczogRmxvYXQzMkFycmF5KSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHBvc2l0aW9ucy5sZW5ndGggLyAzO1xuICAgICAgICBjb25zdCByZXM6IG51bWJlcltdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIFZlYzMuZnJvbUFycmF5KHYzXzEsIHBvc2l0aW9ucywgaSAqIDMpO1xuICAgICAgICAgICAgVmVjMy5mcm9tQXJyYXkodjNfMiwgbm9ybWFscywgaSAqIDMpO1xuICAgICAgICAgICAgVmVjMy5zY2FsZUFuZEFkZCh2M18xLCB2M18xLCBWZWMzLm5vcm1hbGl6ZSh2M18yLCB2M18yKSwgdGhpcy5leHRydWRlKTtcbiAgICAgICAgICAgIFZlYzMudG9BcnJheShyZXMsIHYzXzEsIGkgKiAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIF9nZW5lcmF0ZVdpcmVmcmFtZUlCIChzcmM6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IHJlczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgY29uc3QgbGVuID0gc3JjLmxlbmd0aCAvIDM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzcmNbaSAqIDMgKyAwXTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBzcmNbaSAqIDMgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IGMgPSBzcmNbaSAqIDMgKyAyXTtcbiAgICAgICAgICAgIHJlcy5wdXNoKGEsIGIsIGIsIGMsIGMsIGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufVxuIl19