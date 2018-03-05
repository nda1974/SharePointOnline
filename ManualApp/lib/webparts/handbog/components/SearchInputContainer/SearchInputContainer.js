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
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var SearchInputContainer = (function (_super) {
    __extends(SearchInputContainer, _super);
    function SearchInputContainer(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            "queryText": ""
        };
        return _this;
    }
    SearchInputContainer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "ms-Grid" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md8 ms-lg10" },
                    React.createElement(TextField_1.TextField, { onChanged: function (newValue) { _this.setState({ queryText: newValue }); }, value: this.state.queryText })),
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg2" },
                    React.createElement(Button_1.DefaultButton, { "data-automation-id": 'test', text: 'Search', onClick: function () { return _this._searchBtnClicked(); } })))));
    };
    SearchInputContainer.prototype._searchBtnClicked = function () {
        this.props.callbackSetAppContainerQueryString(this.state.queryText);
    };
    return SearchInputContainer;
}(React.Component));
exports.default = SearchInputContainer;

//# sourceMappingURL=SearchInputContainer.js.map
