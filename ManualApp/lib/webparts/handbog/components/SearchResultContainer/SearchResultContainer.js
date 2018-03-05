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
var Link_1 = require("office-ui-fabric-react/lib/Link");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var TeachingBubbleBasicExample_1 = require("../TeachingBubbleBasicExample/TeachingBubbleBasicExample");
var SearchResultContainer = (function (_super) {
    __extends(SearchResultContainer, _super);
    function SearchResultContainer(props, state) {
        return _super.call(this, props) || this;
    }
    SearchResultContainer.prototype.render = function () {
        return (React.createElement("div", null, this.props.results.map(function (item, key) {
            return (React.createElement("div", { key: key, className: "ms-Grid-row" },
                React.createElement("div", null,
                    React.createElement("h2", null,
                        React.createElement(Link_1.Link, { href: item.Path }, item.Title))),
                React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.info, isMultiline: false }, item.IndboCategory),
                React.createElement("br", null),
                React.createElement("div", null, "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."),
                React.createElement("br", null),
                React.createElement(TeachingBubbleBasicExample_1.TeachingBubbleBasicExample, { text: 'Aenean id eros ut ante ultricies malesuada a vel erat. Donec a molestie nisl, non blandit enim. Mauris sit amet urna nisl. Nulla facilisi. Nullam laoreet auctor neque, sed vestibulum mi porta nec. Sed id augue a est commodo luctus non sit amet arcu. Vestibulum congue risus at mauris pharetra, eu fringilla arcu tincidunt. Aenean sed magna vitae sapien ultricies varius. Duis turpis dui, laoreet ac purus dictum, ornare aliquet tellus. Nulla eu sodales justo. Mauris sodales mauris quis justo tincidunt, eget dignissim risus venenatis.' })));
        })));
    };
    return SearchResultContainer;
}(React.Component));
exports.default = SearchResultContainer;

//# sourceMappingURL=SearchResultContainer.js.map
