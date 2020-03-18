"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _TextButton = _interopRequireDefault(require("../TextButton"));

var _Button = _interopRequireDefault(require("../Button"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _reactIntl = require("react-intl");

var _rules = require("../../rules");

var _RoleIndicator = _interopRequireDefault(require("../RoleIndicator"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  margin-bottom: ", ";\n  line-height: 25px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n  color: ", ";\n\n  a {\n    padding: 0;\n    line-height: 20px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-directiion: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  opacity: 0.5;\n  padding-bottom: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 400px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Roles =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Roles, _React$Component);

  function Roles(props) {
    _classCallCheck(this, Roles);

    return _possibleConstructorReturn(this, _getPrototypeOf(Roles).call(this, props));
  }

  _createClass(Roles, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          roles = _this$props.roles,
          edit = _this$props.edit,
          create = _this$props.create,
          business_admin = _this$props.business_admin,
          persona = _this$props.persona,
          intl = _this$props.intl;
      var business_label = intl.formatMessage({
        id: "roles.business"
      });
      var edit_role_label = intl.formatMessage({
        id: "roles.edit_role"
      });
      var create_role_label = intl.formatMessage({
        id: "roles.create_role"
      });
      console.log(roles);

      if (roles) {
        return _react.default.createElement(RolesList, null, _react.default.createElement(Header, null, _react.default.createElement(Row, null, _react.default.createElement(HeaderItem, {
          flex: "2"
        }, business_label), _react.default.createElement(HeaderItem, {
          flex: "2"
        }, "Role"), _react.default.createElement(HeaderItem, {
          flex: "1"
        }))), roles.map(function (role, k) {
          return (role !== undefined && role.role && role.role.value !== "Archived" || persona === "manager") && _react.default.createElement(BusinessRole, {
            key: k
          }, _react.default.createElement(Row, null, _react.default.createElement(RoleRowItem, {
            flex: "2"
          }, role && role.business && role.business.name), _react.default.createElement(RoleRowItem, {
            flex: "2"
          }, _react.default.createElement(_RoleIndicator.default, {
            role: role
          })), edit && (persona === "manager" || persona === "admin" && role && role.business && business_admin === role.business.id) && _react.default.createElement(RoleRowItem, {
            flex: "1"
          }, _react.default.createElement(_TextButton.default, {
            label: edit_role_label,
            onClick: function onClick() {
              return edit(role);
            }
          }))));
        }), create && _react.default.createElement(_Button.default, {
          label: create_role_label,
          onClick: create
        }));
      } else {
        return _react.default.createElement(RolesList, null, _react.default.createElement(Header, null, _react.default.createElement(Row, null, _react.default.createElement(HeaderItem, null, business_label), _react.default.createElement(HeaderItem, null, "Role"))), _react.default.createElement(EmptyState, null, "No businesses"), create && _react.default.createElement(_Button.default, {
          label: "Create new role",
          onClick: create
        }));
      }
    }
  }]);

  return Roles;
}(_react.default.Component); // Styles


var RolesList = (0, _reactEmotion.default)("div")(_templateObject());
var Header = (0, _reactEmotion.default)("div")(_templateObject2(), _rules.Typography.body.fontFamily, _rules.Typography.small.fontSize, _rules.Colors.secondary.eggplant.default, _rules.Spacing.sm);
var Row = (0, _reactEmotion.default)("div")(_templateObject3());
var HeaderItem = (0, _reactEmotion.default)("div")(_templateObject4(), function (props) {
  return props.flex;
});
var RoleRowItem = (0, _reactEmotion.default)("div")(_templateObject5(), function (props) {
  return props.flex;
}, _rules.Colors.secondary.eggplant.default);
var BusinessRole = (0, _reactEmotion.default)("div")(_templateObject6(), _rules.Typography.body.fontFamily, _rules.Colors.secondary.eggshell.default, _rules.Spacing.sm, _rules.Spacing.md, _rules.BorderRadius.sm, _rules.Spacing.sm);
var EmptyState = (0, _reactEmotion.default)("div")(_templateObject7(), _rules.Typography.body.fontFamily, _rules.Colors.secondary.eggplant.default, _rules.Colors.secondary.eggshell.default, _rules.Spacing.sm, _rules.Spacing.md, _rules.BorderRadius.sm);

var _default = (0, _reactIntl.injectIntl)(Roles);

exports.default = _default;