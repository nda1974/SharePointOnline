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
var SearchInputContainer_1 = require("../SearchInputContainer/SearchInputContainer");
var SearchResultContainer_1 = require("../SearchResultContainer/SearchResultContainer");
var RefinementPanel_1 = require("../RefinementPanel/RefinementPanel");
var SPSearchService_1 = require("../../Services/SPSearchService");
// import { ISearchResult } from '../../../../../lib/webparts/manual/ISearchResults';
var AppContainer = (function (_super) {
    __extends(AppContainer, _super);
    // private wpContext:IWebPartContext;
    function AppContainer(props, state) {
        var _this = _super.call(this, props) || this;
        // this.wpContext=webPartCtx;
        _this.state = {
            refinementFilters: [],
            queryText: '',
            results: {
                RefinementResults: [],
                RelevantResults: []
            }
        };
        // this.handler = this.handler.bind(this)
        // this.onChildChanged= this.onChildChanged.bind(this)
        _this.onQueryTextChanged = _this.onQueryTextChanged.bind(_this);
        _this.onRefinementFiltersChanged = _this.onRefinementFiltersChanged.bind(_this);
        _this.test = _this.state.results.RelevantResults;
        return _this;
    }
    AppContainer.prototype.onQueryTextChanged = function (newState) {
        this.setState({ queryText: newState });
    };
    AppContainer.prototype.onRefinementFiltersChanged = function (newState) {
        if (newState == null) {
            var filters = this.state.refinementFilters;
            filters = [];
            this.setState({ refinementFilters: filters });
        }
        else {
            var filters = [];
            filters.push(newState);
            this.setState({ refinementFilters: filters });
        }
    };
    AppContainer.prototype.render = function () {
        var _this = this;
        if (this.props.manualType == undefined) {
            return (React.createElement("div", null, "Fisk"));
        }
        var ss = new SPSearchService_1.default(this.props.webPartContext);
        var searchResult = ss.search(this.state.queryText, this.state.refinementFilters, this.props.manualType);
        // let searchResult:Promise<ISearchResults>=SPSearchService.search(this.state.queryText,this.state.refinementFilters);
        // searchResult.then(
        //     (data:any)=>{this.setState({results:data})}
        // );
        var results = {
            RelevantResults: [],
            RefinementResults: [],
            TotalRows: 0,
        };
        searchResult.then(function (data) { _this.setState({ results: data }); });
        return (React.createElement("div", { className: "ms-Grid" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement(SearchInputContainer_1.default, { description: '', callbackSetAppContainerQueryString: function (newState) { return _this.onQueryTextChanged(newState); } }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm6" },
                    React.createElement(RefinementPanel_1.default, { refiners: this.state.results.RefinementResults, callbackSetRefinementFilters: function (newState) { return _this.onRefinementFiltersChanged(newState); }, callbackClearRefinementFilters: function () { return _this.onRefinementFiltersChanged(null); } })),
                React.createElement("div", { className: "ms-Grid-col ms-sm6" },
                    React.createElement(SearchResultContainer_1.default, { results: this.state.results.RelevantResults }))),
            React.createElement("p", null,
                "This Query Text state ",
                this.state.queryText),
            React.createElement("p", null,
                "This Refinementfiltes state  ",
                this.state.refinementFilters.map(function (item, key) { return item; }))));
    };
    return AppContainer;
}(React.Component));
exports.default = AppContainer;

//# sourceMappingURL=AppContainer.js.map
