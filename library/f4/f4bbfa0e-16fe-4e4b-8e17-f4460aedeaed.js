System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, math, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Vec2, Vec3, Quat, v2_1, v2_2, v3_1, qt_1, KEYCODE, FirstPersonCamera;

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
      math = _cc.math;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f4bbfoOFv5OS44X9EYK7ert", "first-person-camera", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      Vec2 = math.Vec2;
      Vec3 = math.Vec3;
      Quat = math.Quat;
      v2_1 = new Vec2();
      v2_2 = new Vec2();
      v3_1 = new Vec3();
      qt_1 = new Quat();
      KEYCODE = {
        W: 'W'.charCodeAt(0),
        S: 'S'.charCodeAt(0),
        A: 'A'.charCodeAt(0),
        D: 'D'.charCodeAt(0),
        Q: 'Q'.charCodeAt(0),
        E: 'E'.charCodeAt(0),
        SHIFT: cc.macro.KEY.shift
      };

      _export("FirstPersonCamera", FirstPersonCamera = (_dec = ccclass('FirstPersonCamera'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(FirstPersonCamera, _Component);

        function FirstPersonCamera() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, FirstPersonCamera);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FirstPersonCamera)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));

          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          return _this;
        }

        _createClass(FirstPersonCamera, [{
          key: "onLoad",
          value: function onLoad() {
            cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
            Vec3.copy(this._euler, this.node.eulerAngles);
            Vec3.copy(this._position, this.node.position);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            cc.systemEvent.off(cc.SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
          }
        }, {
          key: "update",
          value: function update(dt) {
            // position
            Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
            Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
            Vec3.lerp(v3_1, this.node.position, this._position, dt / this.damp);
            this.node.setPosition(v3_1); // rotation

            Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
            Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
            this.node.setRotation(qt_1);
          }
        }, {
          key: "onMouseWheel",
          value: function onMouseWheel(e) {
            var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down

            Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
            Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(e) {
            var v = this._velocity;

            if (e.keyCode === KEYCODE.SHIFT) {
              this._speedScale = this.moveSpeedShiftScale;
            } else if (e.keyCode === KEYCODE.W) {
              if (v.z === 0) {
                v.z = -1;
              }
            } else if (e.keyCode === KEYCODE.S) {
              if (v.z === 0) {
                v.z = 1;
              }
            } else if (e.keyCode === KEYCODE.A) {
              if (v.x === 0) {
                v.x = -1;
              }
            } else if (e.keyCode === KEYCODE.D) {
              if (v.x === 0) {
                v.x = 1;
              }
            } else if (e.keyCode === KEYCODE.Q) {
              if (v.y === 0) {
                v.y = -1;
              }
            } else if (e.keyCode === KEYCODE.E) {
              if (v.y === 0) {
                v.y = 1;
              }
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(e) {
            var v = this._velocity;

            if (e.keyCode === KEYCODE.SHIFT) {
              this._speedScale = 1;
            } else if (e.keyCode === KEYCODE.W) {
              if (v.z < 0) {
                v.z = 0;
              }
            } else if (e.keyCode === KEYCODE.S) {
              if (v.z > 0) {
                v.z = 0;
              }
            } else if (e.keyCode === KEYCODE.A) {
              if (v.x < 0) {
                v.x = 0;
              }
            } else if (e.keyCode === KEYCODE.D) {
              if (v.x > 0) {
                v.x = 0;
              }
            } else if (e.keyCode === KEYCODE.Q) {
              if (v.y < 0) {
                v.y = 0;
              }
            } else if (e.keyCode === KEYCODE.E) {
              if (v.y > 0) {
                v.y = 0;
              }
            }
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(_e) {
            if (cc.game.canvas.requestPointerLock) cc.game.canvas.requestPointerLock();
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(e) {
            e.getStartLocation(v2_1);

            if (v2_1.x > cc.winSize.width * 0.4) {
              // rotation
              e.getDelta(v2_2);
              this._euler.y -= v2_2.x * this.rotateSpeed * 0.1;
              this._euler.x += v2_2.y * this.rotateSpeed * 0.1;
            } else {
              // position
              e.getLocation(v2_2);
              Vec2.subtract(v2_2, v2_2, v2_1);
              this._velocity.x = v2_2.x * 0.01;
              this._velocity.z = -v2_2.y * 0.01;
            }
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(e) {
            if (document.exitPointerLock) document.exitPointerLock();
            e.getStartLocation(v2_1);

            if (v2_1.x < cc.winSize.width * 0.4) {
              // position
              this._velocity.x = 0;
              this._velocity.z = 0;
            }
          }
        }]);

        return FirstPersonCamera;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd3VsaWFuZy9Eb2N1bWVudHMvR2l0SHViL21hdGVyaWFsLXByZXNlbnRhdGlvbi9hc3NldHMvc2NyaXB0cy9maXJzdC1wZXJzb24tY2FtZXJhLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJtYXRoIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVmVjMiIsIlZlYzMiLCJRdWF0IiwidjJfMSIsInYyXzIiLCJ2M18xIiwicXRfMSIsIktFWUNPREUiLCJXIiwiY2hhckNvZGVBdCIsIlMiLCJBIiwiRCIsIlEiLCJFIiwiU0hJRlQiLCJjYyIsIm1hY3JvIiwiS0VZIiwic2hpZnQiLCJGaXJzdFBlcnNvbkNhbWVyYSIsInNsaWRlIiwicmFuZ2UiLCJfZXVsZXIiLCJfdmVsb2NpdHkiLCJfcG9zaXRpb24iLCJfc3BlZWRTY2FsZSIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIk1PVVNFX1dIRUVMIiwib25Nb3VzZVdoZWVsIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwiY29weSIsIm5vZGUiLCJldWxlckFuZ2xlcyIsInBvc2l0aW9uIiwib2ZmIiwiZHQiLCJ0cmFuc2Zvcm1RdWF0Iiwicm90YXRpb24iLCJzY2FsZUFuZEFkZCIsIm1vdmVTcGVlZCIsImxlcnAiLCJkYW1wIiwic2V0UG9zaXRpb24iLCJmcm9tRXVsZXIiLCJ4IiwieSIsInoiLCJzbGVycCIsInNldFJvdGF0aW9uIiwiZSIsImRlbHRhIiwiZ2V0U2Nyb2xsWSIsIlVOSVRfWiIsInYiLCJrZXlDb2RlIiwibW92ZVNwZWVkU2hpZnRTY2FsZSIsIl9lIiwiZ2FtZSIsImNhbnZhcyIsInJlcXVlc3RQb2ludGVyTG9jayIsImdldFN0YXJ0TG9jYXRpb24iLCJ3aW5TaXplIiwid2lkdGgiLCJnZXREZWx0YSIsInJvdGF0ZVNwZWVkIiwiZ2V0TG9jYXRpb24iLCJzdWJ0cmFjdCIsImRvY3VtZW50IiwiZXhpdFBvaW50ZXJMb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ3hCQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxRO0FBQ1RDLE1BQUFBLEksR0FBcUJILEksQ0FBckJHLEk7QUFBTUMsTUFBQUEsSSxHQUFlSixJLENBQWZJLEk7QUFBTUMsTUFBQUEsSSxHQUFTTCxJLENBQVRLLEk7QUFFZEMsTUFBQUEsSSxHQUFPLElBQUlILElBQUosRTtBQUNQSSxNQUFBQSxJLEdBQU8sSUFBSUosSUFBSixFO0FBQ1BLLE1BQUFBLEksR0FBTyxJQUFJSixJQUFKLEU7QUFDUEssTUFBQUEsSSxHQUFPLElBQUlKLElBQUosRTtBQUNQSyxNQUFBQSxPLEdBQVU7QUFDWkMsUUFBQUEsQ0FBQyxFQUFFLElBQUlDLFVBQUosQ0FBZSxDQUFmLENBRFM7QUFFWkMsUUFBQUEsQ0FBQyxFQUFFLElBQUlELFVBQUosQ0FBZSxDQUFmLENBRlM7QUFHWkUsUUFBQUEsQ0FBQyxFQUFFLElBQUlGLFVBQUosQ0FBZSxDQUFmLENBSFM7QUFJWkcsUUFBQUEsQ0FBQyxFQUFFLElBQUlILFVBQUosQ0FBZSxDQUFmLENBSlM7QUFLWkksUUFBQUEsQ0FBQyxFQUFFLElBQUlKLFVBQUosQ0FBZSxDQUFmLENBTFM7QUFNWkssUUFBQUEsQ0FBQyxFQUFFLElBQUlMLFVBQUosQ0FBZSxDQUFmLENBTlM7QUFPWk0sUUFBQUEsS0FBSyxFQUFFQyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQztBQVBSLE87O21DQVdIQyxpQixXQURa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LE1BQUwsQ0FBWW1DLENBQVosSUFBaUJ0RCxJQUFJLENBQUNxRCxDQUFMLEdBQVMsS0FBS29CLFdBQWQsR0FBNEIsR0FBN0M7QUFDQSxtQkFBS3RELE1BQUwsQ0FBWWtDLENBQVosSUFBaUJyRCxJQUFJLENBQUNzRCxDQUFMLEdBQVMsS0FBS21CLFdBQWQsR0FBNEIsR0FBN0M7QUFDSCxhQUpELE1BSU87QUFBRTtBQUNMZixjQUFBQSxDQUFDLENBQUNnQixXQUFGLENBQWMxRSxJQUFkO0FBQ0FKLGNBQUFBLElBQUksQ0FBQytFLFFBQUwsQ0FBYzNFLElBQWQsRUFBb0JBLElBQXBCLEVBQTBCRCxJQUExQjtBQUNBLG1CQUFLcUIsU0FBTCxDQUFlaUMsQ0FBZixHQUFtQnJELElBQUksQ0FBQ3FELENBQUwsR0FBUyxJQUE1QjtBQUNBLG1CQUFLakMsU0FBTCxDQUFlbUMsQ0FBZixHQUFtQixDQUFDdkQsSUFBSSxDQUFDc0QsQ0FBTixHQUFVLElBQTdCO0FBQ0g7QUFDSjs7O3FDQUVXSSxDLEVBQUc7QUFDWCxnQkFBSWtCLFFBQVEsQ0FBQ0MsZUFBYixFQUE4QkQsUUFBUSxDQUFDQyxlQUFUO0FBQzlCbkIsWUFBQUEsQ0FBQyxDQUFDVyxnQkFBRixDQUFtQnRFLElBQW5COztBQUNBLGdCQUFJQSxJQUFJLENBQUNzRCxDQUFMLEdBQVN6QyxFQUFFLENBQUMwRCxPQUFILENBQVdDLEtBQVgsR0FBbUIsR0FBaEMsRUFBcUM7QUFBRTtBQUNuQyxtQkFBS25ELFNBQUwsQ0FBZWlDLENBQWYsR0FBbUIsQ0FBbkI7QUFDQSxtQkFBS2pDLFNBQUwsQ0FBZW1DLENBQWYsR0FBbUIsQ0FBbkI7QUFDSDtBQUNKOzs7O1FBeEdrQy9ELFMscUZBRWxDRyxROzs7OztpQkFDVyxDOzs4RkFFWEEsUTs7Ozs7aUJBQ3FCLEM7Ozs7Ozs7aUJBR2YsRzs7c0ZBRU5BLFE7Ozs7O2lCQUNhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIG1hdGggfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuY29uc3QgeyBWZWMyLCBWZWMzLCBRdWF0IH0gPSBtYXRoO1xuXG5jb25zdCB2Ml8xID0gbmV3IFZlYzIoKTtcbmNvbnN0IHYyXzIgPSBuZXcgVmVjMigpO1xuY29uc3QgdjNfMSA9IG5ldyBWZWMzKCk7XG5jb25zdCBxdF8xID0gbmV3IFF1YXQoKTtcbmNvbnN0IEtFWUNPREUgPSB7XG4gICAgVzogJ1cnLmNoYXJDb2RlQXQoMCksXG4gICAgUzogJ1MnLmNoYXJDb2RlQXQoMCksXG4gICAgQTogJ0EnLmNoYXJDb2RlQXQoMCksXG4gICAgRDogJ0QnLmNoYXJDb2RlQXQoMCksXG4gICAgUTogJ1EnLmNoYXJDb2RlQXQoMCksXG4gICAgRTogJ0UnLmNoYXJDb2RlQXQoMCksXG4gICAgU0hJRlQ6IGNjLm1hY3JvLktFWS5zaGlmdCxcbn07XG5cbkBjY2NsYXNzKCdGaXJzdFBlcnNvbkNhbWVyYScpXG5leHBvcnQgY2xhc3MgRmlyc3RQZXJzb25DYW1lcmEgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgbW92ZVNwZWVkID0gMTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1vdmVTcGVlZFNoaWZ0U2NhbGUgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgc2xpZGU6IHRydWUsIHJhbmdlOiBbMC4wNSwgMC41LCAwLjAxXSB9KVxuICAgIGRhbXAgPSAwLjI7XG5cbiAgICBAcHJvcGVydHlcbiAgICByb3RhdGVTcGVlZCA9IDE7XG5cbiAgICBfZXVsZXIgPSBuZXcgVmVjMygpO1xuICAgIF92ZWxvY2l0eSA9IG5ldyBWZWMzKCk7XG4gICAgX3Bvc2l0aW9uID0gbmV3IFZlYzMoKTtcbiAgICBfc3BlZWRTY2FsZSA9IDE7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfV0hFRUwsIHRoaXMub25Nb3VzZVdoZWVsLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIFZlYzMuY29weSh0aGlzLl9ldWxlciwgdGhpcy5ub2RlLmV1bGVyQW5nbGVzKTtcbiAgICAgICAgVmVjMy5jb3B5KHRoaXMuX3Bvc2l0aW9uLCB0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfV0hFRUwsIHRoaXMub25Nb3VzZVdoZWVsLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIC8vIHBvc2l0aW9uXG4gICAgICAgIFZlYzMudHJhbnNmb3JtUXVhdCh2M18xLCB0aGlzLl92ZWxvY2l0eSwgdGhpcy5ub2RlLnJvdGF0aW9uKTtcbiAgICAgICAgVmVjMy5zY2FsZUFuZEFkZCh0aGlzLl9wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24sIHYzXzEsIHRoaXMubW92ZVNwZWVkICogdGhpcy5fc3BlZWRTY2FsZSk7XG4gICAgICAgIFZlYzMubGVycCh2M18xLCB0aGlzLm5vZGUucG9zaXRpb24sIHRoaXMuX3Bvc2l0aW9uLCBkdCAvIHRoaXMuZGFtcCk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2M18xKTtcbiAgICAgICAgLy8gcm90YXRpb25cbiAgICAgICAgUXVhdC5mcm9tRXVsZXIocXRfMSwgdGhpcy5fZXVsZXIueCwgdGhpcy5fZXVsZXIueSwgdGhpcy5fZXVsZXIueik7XG4gICAgICAgIFF1YXQuc2xlcnAocXRfMSwgdGhpcy5ub2RlLnJvdGF0aW9uLCBxdF8xLCBkdCAvIHRoaXMuZGFtcCk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbihxdF8xKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlV2hlZWwgKGUpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSAtZS5nZXRTY3JvbGxZKCkgKiB0aGlzLm1vdmVTcGVlZCAqIDAuMTsgLy8gZGVsdGEgaXMgcG9zaXRpdmUgd2hlbiBzY3JvbGwgZG93blxuICAgICAgICBWZWMzLnRyYW5zZm9ybVF1YXQodjNfMSwgVmVjMy5VTklUX1osIHRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIFZlYzMuc2NhbGVBbmRBZGQodGhpcy5fcG9zaXRpb24sIHRoaXMubm9kZS5wb3NpdGlvbiwgdjNfMSwgZGVsdGEpO1xuICAgIH1cblxuICAgIG9uS2V5RG93biAoZSkge1xuICAgICAgICBjb25zdCB2ID0gdGhpcy5fdmVsb2NpdHk7XG4gICAgICAgIGlmICAgICAgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5TSElGVCkgeyB0aGlzLl9zcGVlZFNjYWxlID0gdGhpcy5tb3ZlU3BlZWRTaGlmdFNjYWxlOyB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5XKSB7IGlmICh2LnogPT09IDApIHsgdi56ID0gLTE7IH0gfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuUykgeyBpZiAodi56ID09PSAwKSB7IHYueiA9ICAxOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLkEpIHsgaWYgKHYueCA9PT0gMCkgeyB2LnggPSAtMTsgfSB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5EKSB7IGlmICh2LnggPT09IDApIHsgdi54ID0gIDE7IH0gfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuUSkgeyBpZiAodi55ID09PSAwKSB7IHYueSA9IC0xOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLkUpIHsgaWYgKHYueSA9PT0gMCkgeyB2LnkgPSAgMTsgfSB9XG4gICAgfVxuXG4gICAgb25LZXlVcCAoZSkge1xuICAgICAgICBjb25zdCB2ID0gdGhpcy5fdmVsb2NpdHk7XG4gICAgICAgIGlmICAgICAgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5TSElGVCkgeyB0aGlzLl9zcGVlZFNjYWxlID0gMTsgfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuVykgeyBpZiAodi56IDwgMCkgeyB2LnogPSAwOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlMpIHsgaWYgKHYueiA+IDApIHsgdi56ID0gMDsgfSB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5BKSB7IGlmICh2LnggPCAwKSB7IHYueCA9IDA7IH0gfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuRCkgeyBpZiAodi54ID4gMCkgeyB2LnggPSAwOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlEpIHsgaWYgKHYueSA8IDApIHsgdi55ID0gMDsgfSB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FKSB7IGlmICh2LnkgPiAwKSB7IHYueSA9IDA7IH0gfVxuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydCAoX2UpIHtcbiAgICAgICAgaWYgKGNjLmdhbWUuY2FudmFzLnJlcXVlc3RQb2ludGVyTG9jaykgY2MuZ2FtZS5jYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUgKGUpIHtcbiAgICAgICAgZS5nZXRTdGFydExvY2F0aW9uKHYyXzEpO1xuICAgICAgICBpZiAodjJfMS54ID4gY2Mud2luU2l6ZS53aWR0aCAqIDAuNCkgeyAvLyByb3RhdGlvblxuICAgICAgICAgICAgZS5nZXREZWx0YSh2Ml8yKTtcbiAgICAgICAgICAgIHRoaXMuX2V1bGVyLnkgLT0gdjJfMi54ICogdGhpcy5yb3RhdGVTcGVlZCAqIDAuMTtcbiAgICAgICAgICAgIHRoaXMuX2V1bGVyLnggKz0gdjJfMi55ICogdGhpcy5yb3RhdGVTcGVlZCAqIDAuMTtcbiAgICAgICAgfSBlbHNlIHsgLy8gcG9zaXRpb25cbiAgICAgICAgICAgIGUuZ2V0TG9jYXRpb24odjJfMik7XG4gICAgICAgICAgICBWZWMyLnN1YnRyYWN0KHYyXzIsIHYyXzIsIHYyXzEpO1xuICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueCA9IHYyXzIueCAqIDAuMDE7XG4gICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS56ID0gLXYyXzIueSAqIDAuMDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoRW5kIChlKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5leGl0UG9pbnRlckxvY2spIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICAgICAgICBlLmdldFN0YXJ0TG9jYXRpb24odjJfMSk7XG4gICAgICAgIGlmICh2Ml8xLnggPCBjYy53aW5TaXplLndpZHRoICogMC40KSB7IC8vIHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnogPSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19