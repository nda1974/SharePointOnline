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
var RefinementPanel_module_scss_1 = require("./RefinementPanel.module.scss");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var RefinementPanel = (function (_super) {
    __extends(RefinementPanel, _super);
    function RefinementPanel(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            refinementFilters: []
        };
        _this.callbackSetRefinementFilters = _this.callbackSetRefinementFilters.bind(_this);
        return _this;
    }
    RefinementPanel.prototype.callbackSetRefinementFilters = function (newState) {
        this.setState({ refinementFilters: newState });
    };
    RefinementPanel.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: RefinementPanel_module_scss_1.default.RefinementPanel },
            React.createElement("div", { className: "ms-Grid" },
                React.createElement("div", { className: "ms-Grid-row" },
                    React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                        React.createElement(Button_1.DefaultButton, { "data-automation-id": 'test', text: 'Ryd filter', value: 'asdf', onClick: function () { return _this._searchBtnClicked(null); } }))),
                this.props.refiners.map(function (item, key) { return (
                // item.Values.map((i,k)=>(   
                item.Values.sort(function (a, b) { return a.RefinementName.localeCompare(b.RefinementName); }).map(function (i, k) { return (React.createElement("div", { className: "ms-Grid-row" },
                    React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                        React.createElement(Button_1.DefaultButton, { className: RefinementPanel_module_scss_1.default.refinerBtn, "data-automation-id": 'test', text: i.RefinementName, value: 'asdf', onClick: function () { return _this._searchBtnClicked(i.RefinementName); } })))); })); }))));
    };
    RefinementPanel.prototype._removeFilter = function () {
        this.props.callbackClearRefinementFilters();
    };
    RefinementPanel.prototype._searchBtnClicked = function (refinermentName) {
        // var str:IRefinementFilter[]=this.state.;
        // str.push(refinermentName);
        // //this.setState({refinementFilters:'asdf'})
        // this.props.callbackSetRefinementFilters(this.state.refinementFilters); 
        if (refinermentName == null) {
            this.props.callbackClearRefinementFilters();
        }
        else {
            this.props.callbackSetRefinementFilters(refinermentName);
        }
    };
    return RefinementPanel;
}(React.Component));
exports.default = RefinementPanel;

//# sourceMappingURL=RefinementPanel.js.map
