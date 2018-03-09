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
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("HandbogWebPartStrings");
var AppContainer_1 = require("./components/AppContainer/AppContainer");
var HandbogWebPart = (function (_super) {
    __extends(HandbogWebPart, _super);
    function HandbogWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandbogWebPart.prototype.render = function () {
        // this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Henter Håndbøger...");
        var element = React.createElement(AppContainer_1.default, {
            description: this.properties.description,
            manualType: this.properties.manualType,
            webPartContext: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(HandbogWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HandbogWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        },
                        {
                            groupName: 'Håndbog',
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneChoiceGroup('manualType', {
                                    label: 'Vælg håndbog',
                                    options: [{ key: 'Baad', text: 'Båd', checked: true },
                                        { key: 'Bil', text: 'Bil' },
                                        { key: 'Hund', text: 'Hund' }
                                    ]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HandbogWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HandbogWebPart;

//# sourceMappingURL=HandbogWebPart.js.map
