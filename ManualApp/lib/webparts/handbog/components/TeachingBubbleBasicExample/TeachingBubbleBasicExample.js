"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = require("react");
/* tslint:enable:no-unused-variable */
var Button_1 = require("office-ui-fabric-react/lib/Button");
var TeachingBubble_1 = require("office-ui-fabric-react/lib/TeachingBubble");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var TeachingBubbleBasicExample_module_scss_1 = require("./TeachingBubbleBasicExample.module.scss");
var TeachingBubbleBasicExample = (function (_super) {
    __extends(TeachingBubbleBasicExample, _super);
    function TeachingBubbleBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onDismiss = _this._onDismiss.bind(_this);
        _this.state = {
            isTeachingBubbleVisible: false,
            text: '',
        };
        return _this;
    }
    TeachingBubbleBasicExample.prototype.render = function () {
        var _this = this;
        var isTeachingBubbleVisible = this.state.isTeachingBubbleVisible;
        var examplePrimaryButton = {
            children: 'Åbn vilkår',
            href: 'http://www.dr.dk',
            target: '_blank'
        };
        var exampleSecondaryButtonProps = {
            children: 'Luk',
            onClick: this._onDismiss
        };
        return (React.createElement("div", { className: 'ms-TeachingBubbleExample' },
            React.createElement("span", { className: 'ms-TeachingBubbleBasicExample-buttonArea', ref: function (menuButton) { return _this._menuButtonElement = menuButton; } },
                React.createElement(Button_1.DefaultButton, { onClick: this._onDismiss, text: isTeachingBubbleVisible ? 'Skjul' : 'Vis mere..' })),
            isTeachingBubbleVisible ? (React.createElement("div", { className: TeachingBubbleBasicExample_module_scss_1.default.MyWidth },
                React.createElement(TeachingBubble_1.TeachingBubble, { targetElement: this._menuButtonElement, primaryButtonProps: examplePrimaryButton, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: this._onDismiss, headline: 'Information omkring det aktuelle vilkår' },
                    React.createElement("div", null,
                        React.createElement("h1", null, "Afsnit 1")),
                    React.createElement("div", null, this.props.text),
                    React.createElement(Link_1.Link, { href: 'http://dev.office.com/fabric/components/link' }, "Se afg\u00F8relse."),
                    React.createElement("h1", null, "Afsnit 2"),
                    React.createElement("div", null, this.props.text),
                    React.createElement(Link_1.Link, { href: 'http://dev.office.com/fabric/components/link' }, "Se afg\u00F8relse.")))) : (null)));
    };
    TeachingBubbleBasicExample.prototype._onDismiss = function (ev) {
        this.setState({
            isTeachingBubbleVisible: !this.state.isTeachingBubbleVisible
        });
    };
    return TeachingBubbleBasicExample;
}(React.Component));
exports.TeachingBubbleBasicExample = TeachingBubbleBasicExample;

//# sourceMappingURL=TeachingBubbleBasicExample.js.map
