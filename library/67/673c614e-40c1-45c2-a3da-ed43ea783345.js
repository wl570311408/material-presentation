System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioSourceComponent, SkeletalAnimationComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SequenceManager;

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
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSourceComponent = _cc.AudioSourceComponent;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "673c6FOQMFFwqPa7UPqeDNF", "sequence-manager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SequenceManager", SequenceManager = (_dec = ccclass('SequenceManager'), _dec2 = property(AudioSourceComponent), _dec3 = property(SkeletalAnimationComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SequenceManager, _Component);

        function SequenceManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SequenceManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SequenceManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "audioSource", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animationComp", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SequenceManager, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.audioSource.stop();
            this.animationComp.stop();
            setTimeout(function () {
              _this2.audioSource.play();

              _this2.audioSource.volume = 1;

              _this2.audioSource.clip.on('started', function () {
                _this2.animationComp.play();

                _this2.animationComp.node.setPosition(0, 0, 0);
              });
            }, 2000); // document.createElement('canvas').getContext('2d').fillText('some string', 0, 0);
          }
        }]);

        return SequenceManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animationComp", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd3VsaWFuZy9Eb2N1bWVudHMvR2l0SHViL21hdGVyaWFsLXByZXNlbnRhdGlvbi9hc3NldHMvc2NyaXB0cy9zZXF1ZW5jZS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJBdWRpb1NvdXJjZUNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2VxdWVuY2VNYW5hZ2VyIiwiYXVkaW9Tb3VyY2UiLCJzdG9wIiwiYW5pbWF0aW9uQ29tcCIsInNldFRpbWVvdXQiLCJwbGF5Iiwidm9sdW1lIiwiY2xpcCIsIm9uIiwibm9kZSIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JDLE1BQUFBLDBCLE9BQUFBLDBCOzs7Ozs7QUFDOUNDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O2lDQUdKQyxlLFdBRFpGLE9BQU8sQ0FBQyxpQkFBRCxDLFVBR0hDLFFBQVEsQ0FBQ0gsb0JBQUQsQyxVQUdSRyxRQUFRLENBQUNGLDBCQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0E7QUFBQTs7QUFDTCxpQkFBS0ksV0FBTCxDQUFpQkMsSUFBakI7QUFDQSxpQkFBS0MsYUFBTCxDQUFtQkQsSUFBbkI7QUFDQUUsWUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDYixjQUFBLE1BQUksQ0FBQ0gsV0FBTCxDQUFpQkksSUFBakI7O0FBQ0EsY0FBQSxNQUFJLENBQUNKLFdBQUwsQ0FBaUJLLE1BQWpCLEdBQTBCLENBQTFCOztBQUNBLGNBQUEsTUFBSSxDQUFDTCxXQUFMLENBQWlCTSxJQUFqQixDQUFzQkMsRUFBdEIsQ0FBeUIsU0FBekIsRUFBb0MsWUFBTTtBQUN0QyxnQkFBQSxNQUFJLENBQUNMLGFBQUwsQ0FBbUJFLElBQW5COztBQUNBLGdCQUFBLE1BQUksQ0FBQ0YsYUFBTCxDQUFtQk0sSUFBbkIsQ0FBd0JDLFdBQXhCLENBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDO0FBQ0gsZUFIRDtBQUlILGFBUFMsRUFPUCxJQVBPLENBQVYsQ0FISyxDQVdMO0FBQ0g7Ozs7UUFwQmdDZixTOzs7OztpQkFHbkIsSTs7Ozs7OztpQkFHRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBBdWRpb1NvdXJjZUNvbXBvbmVudCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIGdhbWUgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU2VxdWVuY2VNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBTZXF1ZW5jZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KEF1ZGlvU291cmNlQ29tcG9uZW50KVxuICAgIGF1ZGlvU291cmNlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudClcbiAgICBhbmltYXRpb25Db21wID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5zdG9wKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29tcC5zdG9wKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLmNsaXAub24oJ3N0YXJ0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Db21wLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbXAubm9kZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKS5maWxsVGV4dCgnc29tZSBzdHJpbmcnLCAwLCAwKTtcbiAgICB9XG59XG4iXX0=