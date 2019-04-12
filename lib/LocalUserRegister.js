'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ValidatedTextField = require('./components/ValidatedTextField');

var _ValidatedTextField2 = _interopRequireDefault(_ValidatedTextField);

var _LoginRegisterError = require('./components/LoginRegisterError');

var _LoginRegisterError2 = _interopRequireDefault(_LoginRegisterError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {},
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    field: {
      marginTop: theme.spacing.unit
    },
    actions: {
      marginTop: theme.spacing.unit * 2
    }
  };
};

var LocalUserRegister = function (_Component) {
  _inherits(LocalUserRegister, _Component);

  function LocalUserRegister(props) {
    _classCallCheck(this, LocalUserRegister);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.disableSubmit = function () {
      _this.setState({ canSubmit: false });
    };

    _this.enableSubmit = function () {
      _this.setState({ canSubmit: true });
    };

    _this.submit = function (model) {
      if (_this.props.onRegister) {
        _this.props.onRegister(model);
      }
    };

    _this.state = {
      canSubmit: false
    };
    return _this;
  }

  LocalUserRegister.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        registerFailed = _props.registerFailed;
    var canSubmit = this.state.canSubmit;

    return _react2.default.createElement(
      'div',
      { className: classes.root },
      _react2.default.createElement(
        _formsyReact2.default,
        { className: classes.form,
          onValid: this.enableSubmit, onInvalid: this.disableSubmit,
          onValidSubmit: this.submit },
        _react2.default.createElement(_ValidatedTextField2.default, {
          name: 'username',
          autoComplete: 'username',
          validations: 'minLength:3',
          validationErrors: {
            minLength: "Too short"
          },
          required: true,
          className: classes.field,
          label: 'Email'
        }),
        _react2.default.createElement(_ValidatedTextField2.default, {
          type: 'password',
          name: 'password',
          autoComplete: 'new-password',
          validations: 'minLength:2',
          validationErrors: {
            minLength: "Too short"
          },
          required: true,
          className: classes.field,
          label: 'Create a password'
        }),
        _react2.default.createElement(_ValidatedTextField2.default, {
          type: 'password',
          name: 'repeated_password',
          autoComplete: 'new-password',
          validations: 'equalsField:password',
          validationErrors: {
            equalsField: "Needs to be the same password as above"
          },
          required: true,
          className: classes.field,
          label: 'Enter password again'
        }),
        registerFailed && _react2.default.createElement(_LoginRegisterError2.default, { message: registerFailed }),
        _react2.default.createElement(
          'div',
          { className: classes.actions },
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit',
              fullWidth: true,
              variant: 'contained', color: 'primary',
              disabled: !canSubmit },
            'Register'
          )
        )
      )
    );
  };

  return LocalUserRegister;
}(_react.Component);

LocalUserRegister.propTypes = process.env.NODE_ENV !== "production" ? {
  onRegister: _propTypes2.default.func,
  registerFailed: _propTypes2.default.string
} : {};
exports.default = (0, _styles.withStyles)(styles)(LocalUserRegister);
module.exports = exports['default'];