System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Quat, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, executeInEditMode, SelfRotor;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ca1ffdwjpRBIagYd+gaTwbI", "self-rotor", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      executeInEditMode = _decorator.executeInEditMode;

      _export("SelfRotor", // not always a good idea
      SelfRotor = (_dec = ccclass('SelfRotor'), _dec(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SelfRotor, _Component);

        function SelfRotor() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SelfRotor);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelfRotor)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "_euler", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "localSpace", _descriptor2, _assertThisInitialized(_this));

          _this._quat = new Quat();
          return _this;
        }

        _createClass(SelfRotor, [{
          key: "onLoad",
          value: function onLoad() {
            this.euler = this._euler;
          }
        }, {
          key: "update",
          value: function update(dt) {
            this.node.rotate(this._quat, this.localSpace ? Node.NodeSpace.LOCAL : Node.NodeSpace.WORLD);
          }
        }, {
          key: "euler",
          set: function set(val) {
            Vec3.copy(this._euler, val);
            Quat.fromEuler(this._quat, this.euler.x, this.euler.y, this.euler.z);
          },
          get: function get() {
            return this._euler;
          }
        }]);

        return SelfRotor;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_euler", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "localSpace", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "euler", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "euler"), _class2.prototype)), _class2)) || _class) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd3VsaWFuZy9Eb2N1bWVudHMvR2l0SHViL21hdGVyaWFsLXByZXNlbnRhdGlvbi9hc3NldHMvc2NyaXB0cy9zZWxmLXJvdG9yLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIlF1YXQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJleGVjdXRlSW5FZGl0TW9kZSIsIlNlbGZSb3RvciIsIl9xdWF0IiwiZXVsZXIiLCJfZXVsZXIiLCJkdCIsIm5vZGUiLCJyb3RhdGUiLCJsb2NhbFNwYWNlIiwiTm9kZVNwYWNlIiwiTE9DQUwiLCJXT1JMRCIsInZhbCIsImNvcHkiLCJmcm9tRXVsZXIiLCJ4IiwieSIsInoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7Ozs7OztBQUNwQ0MsTUFBQUEsTyxHQUF5Q0wsVSxDQUF6Q0ssTztBQUFTQyxNQUFBQSxRLEdBQWdDTixVLENBQWhDTSxRO0FBQVVDLE1BQUFBLGlCLEdBQXNCUCxVLENBQXRCTyxpQjs7MkJBR1I7QUFDTkMsTUFBQUEsUyxXQUZaSCxPQUFPLENBQUMsV0FBRCxDLGdCQUNQRSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBUUdFLEssR0FBUSxJQUFJTCxJQUFKLEU7Ozs7OzttQ0FXRTtBQUNOLGlCQUFLTSxLQUFMLEdBQWEsS0FBS0MsTUFBbEI7QUFDSDs7O2lDQUVPQyxFLEVBQVk7QUFDaEIsaUJBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQixLQUFLTCxLQUF0QixFQUE2QixLQUFLTSxVQUFMLEdBQWtCYixJQUFJLENBQUNjLFNBQUwsQ0FBZUMsS0FBakMsR0FBeUNmLElBQUksQ0FBQ2MsU0FBTCxDQUFlRSxLQUFyRjtBQUNIOzs7NEJBZFVDLEcsRUFBVztBQUNsQmhCLFlBQUFBLElBQUksQ0FBQ2lCLElBQUwsQ0FBVSxLQUFLVCxNQUFmLEVBQXVCUSxHQUF2QjtBQUNBZixZQUFBQSxJQUFJLENBQUNpQixTQUFMLENBQWUsS0FBS1osS0FBcEIsRUFBMkIsS0FBS0MsS0FBTCxDQUFXWSxDQUF0QyxFQUF5QyxLQUFLWixLQUFMLENBQVdhLENBQXBELEVBQXVELEtBQUtiLEtBQUwsQ0FBV2MsQ0FBbEU7QUFDSCxXOzhCQUNZO0FBQ1QsbUJBQU8sS0FBS2IsTUFBWjtBQUNIOzs7O1FBaEIwQlYsUyxrRkFFMUJLLFE7Ozs7O2lCQUNRLElBQUlILElBQUosRTs7cUZBQ1JHLFE7Ozs7O2lCQUNZLEk7O2lFQUlaQSxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCBRdWF0IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTZWxmUm90b3InKVxuQGV4ZWN1dGVJbkVkaXRNb2RlIC8vIG5vdCBhbHdheXMgYSBnb29kIGlkZWFcbmV4cG9ydCBjbGFzcyBTZWxmUm90b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgX2V1bGVyID0gbmV3IFZlYzMoKTtcbiAgICBAcHJvcGVydHlcbiAgICBsb2NhbFNwYWNlID0gdHJ1ZTtcblxuICAgIF9xdWF0ID0gbmV3IFF1YXQoKTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNldCBldWxlciAodmFsOiBWZWMzKSB7XG4gICAgICAgIFZlYzMuY29weSh0aGlzLl9ldWxlciwgdmFsKTtcbiAgICAgICAgUXVhdC5mcm9tRXVsZXIodGhpcy5fcXVhdCwgdGhpcy5ldWxlci54LCB0aGlzLmV1bGVyLnksIHRoaXMuZXVsZXIueik7XG4gICAgfVxuICAgIGdldCBldWxlciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldWxlcjtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmV1bGVyID0gdGhpcy5fZXVsZXI7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubm9kZS5yb3RhdGUodGhpcy5fcXVhdCwgdGhpcy5sb2NhbFNwYWNlID8gTm9kZS5Ob2RlU3BhY2UuTE9DQUwgOiBOb2RlLk5vZGVTcGFjZS5XT1JMRCk7XG4gICAgfVxufVxuIl19