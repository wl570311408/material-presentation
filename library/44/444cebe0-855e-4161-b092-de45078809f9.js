System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ModelComponent, Material, utils, Color, Vec3, GFXPrimitiveMode, GFXAttributeName, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, executeInEditMode, requireComponent, v3_1, v3_2, TangentVisualizer;

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
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ModelComponent = _cc.ModelComponent;
      Material = _cc.Material;
      utils = _cc.utils;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
      GFXPrimitiveMode = _cc.GFXPrimitiveMode;
      GFXAttributeName = _cc.GFXAttributeName;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "444cevghV5BYbCS3kUHiAn5", "tangent-visualizer", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      executeInEditMode = _decorator.executeInEditMode;
      requireComponent = _decorator.requireComponent;
      v3_1 = new Vec3();
      v3_2 = new Vec3();

      _export("TangentVisualizer", TangentVisualizer = (_dec = ccclass('TangentVisualizer'), _dec2 = requireComponent(ModelComponent), _dec3 = property(ModelComponent), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TangentVisualizer, _Component);

        function TangentVisualizer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TangentVisualizer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TangentVisualizer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scale", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "primitiveIndex", _descriptor3, _assertThisInitialized(_this));

          _this._material = new Material();
          return _this;
        }

        _createClass(TangentVisualizer, [{
          key: "start",
          value: function start() {
            this._material.initialize({
              effectName: 'builtin-unlit',
              defines: {
                USE_VERTEX_COLOR: true
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
            if (!this.target) {
              return;
            }

            var comps = this.node.getComponents(ModelComponent);

            if (comps.length < 3) {
              console.warn('three model component on this node is needed');
              return;
            }

            var position = this.target.mesh.readAttribute(this.primitiveIndex, GFXAttributeName.ATTR_POSITION);
            var normal = this.target.mesh.readAttribute(this.primitiveIndex, GFXAttributeName.ATTR_NORMAL);
            var tangent = this.target.mesh.readAttribute(this.primitiveIndex, GFXAttributeName.ATTR_TANGENT);

            var bitangent = this._generateBitangent(normal, tangent);

            this._updateModel(comps[0], position, normal, Color.MAGENTA);

            this._updateModel(comps[1], position, tangent, Color.CYAN, 4);

            this._updateModel(comps[2], position, bitangent, Color.YELLOW);
          }
        }, {
          key: "_updateModel",
          value: function _updateModel(comp, pos, data, color) {
            var _this2 = this;

            var stride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
            comp.material = this._material;
            comp.mesh = utils.createMesh({
              positions: Array(pos.length / 3 * 2).fill(0).map(function (_, i) {
                var ofs = Math.floor(i / 2);
                Vec3.fromArray(v3_1, pos, ofs * 3);
                if (i % 2) Vec3.scaleAndAdd(v3_1, v3_1, Vec3.fromArray(v3_2, data, ofs * stride), _this2.scale);
                return Vec3.toArray([], v3_1);
              }).reduce(function (acc, cur) {
                return cur.forEach(function (c) {
                  return acc.push(c);
                }), acc;
              }, []),
              colors: Array(pos.length / 3 * 2).fill(0).map(function (_, i) {
                return Color.toArray([], i % 2 ? color : Color.WHITE);
              }).reduce(function (acc, cur) {
                return cur.forEach(function (c) {
                  return acc.push(c);
                }), acc;
              }, []),
              primitiveMode: GFXPrimitiveMode.LINE_LIST,
              minPos: this.target.mesh.minPosition,
              maxPos: this.target.mesh.maxPosition
            });
          }
        }, {
          key: "_generateBitangent",
          value: function _generateBitangent(normal, tangent) {
            var bitangent = normal.slice();
            var vCount = normal.length / 3;

            for (var i = 0; i < vCount; i++) {
              Vec3.fromArray(v3_1, normal, i * 3);
              Vec3.fromArray(v3_2, tangent, i * 4);
              Vec3.multiplyScalar(v3_1, Vec3.cross(v3_1, v3_1, v3_2), tangent[i * 4 + 3]);
              Vec3.toArray(bitangent, v3_1, i * 3);
            }

            return bitangent;
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

        return TangentVisualizer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "primitiveIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "apply", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "apply"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd3VsaWFuZy9Eb2N1bWVudHMvR2l0SHViL21hdGVyaWFsLXByZXNlbnRhdGlvbi9hc3NldHMvc2NyaXB0cy90YW5nZW50LXZpc3VhbGl6ZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk1vZGVsQ29tcG9uZW50IiwiTWF0ZXJpYWwiLCJ1dGlscyIsIkNvbG9yIiwiVmVjMyIsIkdGWFByaW1pdGl2ZU1vZGUiLCJHRlhBdHRyaWJ1dGVOYW1lIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJyZXF1aXJlQ29tcG9uZW50IiwidjNfMSIsInYzXzIiLCJUYW5nZW50VmlzdWFsaXplciIsIl9tYXRlcmlhbCIsImluaXRpYWxpemUiLCJlZmZlY3ROYW1lIiwiZGVmaW5lcyIsIlVTRV9WRVJURVhfQ09MT1IiLCJzdGF0ZXMiLCJwcmltaXRpdmUiLCJMSU5FX0xJU1QiLCJyZWZyZXNoIiwidGFyZ2V0IiwiY29tcHMiLCJub2RlIiwiZ2V0Q29tcG9uZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwicG9zaXRpb24iLCJtZXNoIiwicmVhZEF0dHJpYnV0ZSIsInByaW1pdGl2ZUluZGV4IiwiQVRUUl9QT1NJVElPTiIsIm5vcm1hbCIsIkFUVFJfTk9STUFMIiwidGFuZ2VudCIsIkFUVFJfVEFOR0VOVCIsImJpdGFuZ2VudCIsIl9nZW5lcmF0ZUJpdGFuZ2VudCIsIl91cGRhdGVNb2RlbCIsIk1BR0VOVEEiLCJDWUFOIiwiWUVMTE9XIiwiY29tcCIsInBvcyIsImRhdGEiLCJjb2xvciIsInN0cmlkZSIsIm1hdGVyaWFsIiwiY3JlYXRlTWVzaCIsInBvc2l0aW9ucyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwib2ZzIiwiTWF0aCIsImZsb29yIiwiZnJvbUFycmF5Iiwic2NhbGVBbmRBZGQiLCJzY2FsZSIsInRvQXJyYXkiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJmb3JFYWNoIiwiYyIsInB1c2giLCJjb2xvcnMiLCJXSElURSIsInByaW1pdGl2ZU1vZGUiLCJtaW5Qb3MiLCJtaW5Qb3NpdGlvbiIsIm1heFBvcyIsIm1heFBvc2l0aW9uIiwic2xpY2UiLCJ2Q291bnQiLCJtdWx0aXBseVNjYWxhciIsImNyb3NzIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGdCLE9BQUFBLGdCO0FBQWtCQyxNQUFBQSxnQixPQUFBQSxnQjs7Ozs7O0FBQ3hGQyxNQUFBQSxPLEdBQTJEVCxVLENBQTNEUyxPO0FBQVNDLE1BQUFBLFEsR0FBa0RWLFUsQ0FBbERVLFE7QUFBVUMsTUFBQUEsaUIsR0FBd0NYLFUsQ0FBeENXLGlCO0FBQW1CQyxNQUFBQSxnQixHQUFxQlosVSxDQUFyQlksZ0I7QUFFeENDLE1BQUFBLEksR0FBTyxJQUFJUCxJQUFKLEU7QUFDUFEsTUFBQUEsSSxHQUFPLElBQUlSLElBQUosRTs7bUNBS0FTLGlCLFdBSFpOLE9BQU8sQ0FBQyxtQkFBRCxDLFVBQ1BHLGdCQUFnQixDQUFDVixjQUFELEMsVUFJWlEsUUFBUSxDQUFDUixjQUFELEMsK0JBSFpTLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVlHSyxTLEdBQVksSUFBSWIsUUFBSixFOzs7Ozs7a0NBVUg7QUFDTCxpQkFBS2EsU0FBTCxDQUFlQyxVQUFmLENBQTBCO0FBQ3RCQyxjQUFBQSxVQUFVLEVBQUUsZUFEVTtBQUV0QkMsY0FBQUEsT0FBTyxFQUFFO0FBQUVDLGdCQUFBQSxnQkFBZ0IsRUFBRTtBQUFwQixlQUZhO0FBR3RCQyxjQUFBQSxNQUFN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LEVBQWdCQSxDQUFDLEdBQUdzQixNQUFwQixFQUE0QnRCLENBQUMsRUFBN0IsRUFBaUM7QUFDN0JyRCxjQUFBQSxJQUFJLENBQUN5RCxTQUFMLENBQWVsRCxJQUFmLEVBQXFCd0IsTUFBckIsRUFBNkJzQixDQUFDLEdBQUcsQ0FBakM7QUFDQXJELGNBQUFBLElBQUksQ0FBQ3lELFNBQUwsQ0FBZWpELElBQWYsRUFBcUJ5QixPQUFyQixFQUE4Qm9CLENBQUMsR0FBRyxDQUFsQztBQUNBckQsY0FBQUEsSUFBSSxDQUFDNEUsY0FBTCxDQUFvQnJFLElBQXBCLEVBQTBCUCxJQUFJLENBQUM2RSxLQUFMLENBQVd0RSxJQUFYLEVBQWlCQSxJQUFqQixFQUF1QkMsSUFBdkIsQ0FBMUIsRUFBd0R5QixPQUFPLENBQUNvQixDQUFDLEdBQUcsQ0FBSixHQUFRLENBQVQsQ0FBL0Q7QUFDQXJELGNBQUFBLElBQUksQ0FBQzRELE9BQUwsQ0FBYXpCLFNBQWIsRUFBd0I1QixJQUF4QixFQUE4QjhDLENBQUMsR0FBRyxDQUFsQztBQUNIOztBQUNELG1CQUFPbEIsU0FBUDtBQUNIOzs7NEJBekRVMkMsRyxFQUFLO0FBQ1osaUJBQUs1RCxPQUFMO0FBQ0gsVzs4QkFDWTtBQUNULG1CQUFPLEtBQVA7QUFDSDs7OztRQW5Ca0N2QixTOzs7OztpQkFHMUIsSTs7Z0ZBRVJTLFE7Ozs7O2lCQUNPLEc7O3lGQUVQQSxROzs7OztpQkFDZ0IsQzs7aUVBSWhCQSxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBNb2RlbENvbXBvbmVudCwgTWF0ZXJpYWwsIHV0aWxzLCBDb2xvciwgVmVjMywgR0ZYUHJpbWl0aXZlTW9kZSwgR0ZYQXR0cmlidXRlTmFtZSB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCByZXF1aXJlQ29tcG9uZW50IH0gPSBfZGVjb3JhdG9yO1xuXG5jb25zdCB2M18xID0gbmV3IFZlYzMoKTtcbmNvbnN0IHYzXzIgPSBuZXcgVmVjMygpO1xuXG5AY2NjbGFzcygnVGFuZ2VudFZpc3VhbGl6ZXInKVxuQHJlcXVpcmVDb21wb25lbnQoTW9kZWxDb21wb25lbnQpXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBjbGFzcyBUYW5nZW50VmlzdWFsaXplciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoTW9kZWxDb21wb25lbnQpXG4gICAgdGFyZ2V0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNjYWxlID0gMC4xO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpbWl0aXZlSW5kZXggPSAwO1xuXG4gICAgX21hdGVyaWFsID0gbmV3IE1hdGVyaWFsKCk7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzZXQgYXBwbHkgKHZhbCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgZ2V0IGFwcGx5ICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuaW5pdGlhbGl6ZSh7XG4gICAgICAgICAgICBlZmZlY3ROYW1lOiAnYnVpbHRpbi11bmxpdCcsXG4gICAgICAgICAgICBkZWZpbmVzOiB7IFVTRV9WRVJURVhfQ09MT1I6IHRydWUgfSxcbiAgICAgICAgICAgIHN0YXRlczogeyBwcmltaXRpdmU6IEdGWFByaW1pdGl2ZU1vZGUuTElORV9MSVNUIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2ggKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7IHJldHVybjsgfVxuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKGNvbXBzLmxlbmd0aCA8IDMpIHsgY29uc29sZS53YXJuKCd0aHJlZSBtb2RlbCBjb21wb25lbnQgb24gdGhpcyBub2RlIGlzIG5lZWRlZCcpOyByZXR1cm47IH1cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnRhcmdldC5tZXNoLnJlYWRBdHRyaWJ1dGUodGhpcy5wcmltaXRpdmVJbmRleCwgR0ZYQXR0cmlidXRlTmFtZS5BVFRSX1BPU0lUSU9OKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gdGhpcy50YXJnZXQubWVzaC5yZWFkQXR0cmlidXRlKHRoaXMucHJpbWl0aXZlSW5kZXgsIEdGWEF0dHJpYnV0ZU5hbWUuQVRUUl9OT1JNQUwpO1xuICAgICAgICBjb25zdCB0YW5nZW50ID0gdGhpcy50YXJnZXQubWVzaC5yZWFkQXR0cmlidXRlKHRoaXMucHJpbWl0aXZlSW5kZXgsIEdGWEF0dHJpYnV0ZU5hbWUuQVRUUl9UQU5HRU5UKTtcbiAgICAgICAgY29uc3QgYml0YW5nZW50ID0gdGhpcy5fZ2VuZXJhdGVCaXRhbmdlbnQobm9ybWFsLCB0YW5nZW50KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTW9kZWwoY29tcHNbMF0sIHBvc2l0aW9uLCBub3JtYWwsIENvbG9yLk1BR0VOVEEpO1xuICAgICAgICB0aGlzLl91cGRhdGVNb2RlbChjb21wc1sxXSwgcG9zaXRpb24sIHRhbmdlbnQsIENvbG9yLkNZQU4sIDQpO1xuICAgICAgICB0aGlzLl91cGRhdGVNb2RlbChjb21wc1syXSwgcG9zaXRpb24sIGJpdGFuZ2VudCwgQ29sb3IuWUVMTE9XKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlTW9kZWwgKGNvbXA6IE1vZGVsQ29tcG9uZW50LCBwb3M6IEZsb2F0MzJBcnJheSwgZGF0YTogRmxvYXQzMkFycmF5LCBjb2xvcjogQ29sb3IsIHN0cmlkZSA9IDMpIHtcbiAgICAgICAgY29tcC5tYXRlcmlhbCA9IHRoaXMuX21hdGVyaWFsO1xuICAgICAgICBjb21wLm1lc2ggPSB1dGlscy5jcmVhdGVNZXNoKHtcbiAgICAgICAgICAgIHBvc2l0aW9uczogQXJyYXkocG9zLmxlbmd0aCAvIDMgKiAyKS5maWxsKDApLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mcyA9IE1hdGguZmxvb3IoaSAvIDIpO1xuICAgICAgICAgICAgICAgIFZlYzMuZnJvbUFycmF5KHYzXzEsIHBvcywgb2ZzICogMyk7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSAyKSBWZWMzLnNjYWxlQW5kQWRkKHYzXzEsIHYzXzEsIFZlYzMuZnJvbUFycmF5KHYzXzIsIGRhdGEsIG9mcyAqIHN0cmlkZSksIHRoaXMuc2NhbGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBWZWMzLnRvQXJyYXkoW10sIHYzXzEpIGFzIG51bWJlcltdO1xuICAgICAgICAgICAgfSkucmVkdWNlKChhY2MsIGN1cikgPT4gKGN1ci5mb3JFYWNoKChjKSA9PiBhY2MucHVzaChjKSksIGFjYyksIFtdKSxcbiAgICAgICAgICAgIGNvbG9yczogQXJyYXkocG9zLmxlbmd0aCAvIDMgKiAyKS5maWxsKDApLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBDb2xvci50b0FycmF5KFtdLCBpICUgMiA/IGNvbG9yIDogQ29sb3IuV0hJVEUpIGFzIG51bWJlcltdO1xuICAgICAgICAgICAgfSkucmVkdWNlKChhY2MsIGN1cikgPT4gKGN1ci5mb3JFYWNoKChjKSA9PiBhY2MucHVzaChjKSksIGFjYyksIFtdKSxcbiAgICAgICAgICAgIHByaW1pdGl2ZU1vZGU6IEdGWFByaW1pdGl2ZU1vZGUuTElORV9MSVNULFxuICAgICAgICAgICAgbWluUG9zOiB0aGlzLnRhcmdldC5tZXNoLm1pblBvc2l0aW9uLFxuICAgICAgICAgICAgbWF4UG9zOiB0aGlzLnRhcmdldC5tZXNoLm1heFBvc2l0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2VuZXJhdGVCaXRhbmdlbnQgKG5vcm1hbDogRmxvYXQzMkFycmF5LCB0YW5nZW50OiBGbG9hdDMyQXJyYXkpIHtcbiAgICAgICAgY29uc3QgYml0YW5nZW50ID0gbm9ybWFsLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IHZDb3VudCA9IG5vcm1hbC5sZW5ndGggLyAzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBWZWMzLmZyb21BcnJheSh2M18xLCBub3JtYWwsIGkgKiAzKTtcbiAgICAgICAgICAgIFZlYzMuZnJvbUFycmF5KHYzXzIsIHRhbmdlbnQsIGkgKiA0KTtcbiAgICAgICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodjNfMSwgVmVjMy5jcm9zcyh2M18xLCB2M18xLCB2M18yKSwgdGFuZ2VudFtpICogNCArIDNdKTtcbiAgICAgICAgICAgIFZlYzMudG9BcnJheShiaXRhbmdlbnQsIHYzXzEsIGkgKiAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYml0YW5nZW50O1xuICAgIH1cbn1cbiJdfQ==