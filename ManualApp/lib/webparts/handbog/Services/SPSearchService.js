"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = require("sp-pnp-js");
var moment = require("moment");
var SPSearchService = (function () {
    function SPSearchService(webPartContext) {
        this._context = webPartContext;
        //refinablestring00 = AnsvarCategory
        //refinablestring01 = HundCategory
        //refinablestring02 = BaadCategory
        //refinablestring03 = BaadArea
        //refinablestring04 = BilCategory
        // Setup the PnP JS instance
        var consoleListener = new sp_pnp_js_1.ConsoleListener();
        sp_pnp_js_1.Logger.subscribe(consoleListener);
        // To limit the payload size, we set odata=nometadata
        // We just need to get list items here
        // We also set the SPFx context accordingly (https://github.com/SharePoint/PnP-JS-Core/wiki/Using-sp-pnp-js-in-SharePoint-Framework)
        sp_pnp_js_1.setup({
            sp: {
                headers: {
                    Accept: "application/json; odata=nometadata",
                },
            },
            spfxContext: this._context,
        });
    }
    // public static async search(queryText:string,refinementFilters:string[]):Promise<ISearchResults>{
    SPSearchService.prototype.search = function (queryText, refinementFilters, manualType) {
        return __awaiter(this, void 0, void 0, function () {
            var searchQuery, sortedRefiners, selectPropertyCategory, filterOnContentType, refinersMappedProerties, selectProperties, rf, r, allItemsPromises, refinementResults, results, r2, resultRows, refinementResultsRows, refinementRows, relevantResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('manualType ' + manualType);
                        if (manualType == 'undefined') {
                            return [2 /*return*/];
                        }
                        searchQuery = {};
                        sortedRefiners = [];
                        selectPropertyCategory = "";
                        filterOnContentType = "";
                        refinersMappedProerties = "";
                        selectProperties = ['Title', 'Author', 'IndboCategory', 'Path', 'RefinableString02'];
                        switch (manualType.toUpperCase()) {
                            case "BAAD":
                                selectProperties = ['Title', 'Author', 'BaadCategory', 'Path', 'RefinableString02'];
                                filterOnContentType = "BaadManual";
                                console.log(manualType.toUpperCase());
                                break;
                            case "BIL":
                                selectProperties = ['Title', 'Author', 'BilCategory', 'Path', 'RefinableString04'];
                                filterOnContentType = "BilManual";
                                refinersMappedProerties = "refinablestring04";
                                console.log(manualType.toUpperCase());
                                break;
                            case "HUND":
                                console.log(manualType.toUpperCase());
                                selectProperties = ['Title', 'Author', 'HundCategory', 'Path', 'RefinableString02'];
                                filterOnContentType = "HundManual";
                                break;
                            default:
                                break;
                        }
                        rf = [];
                        if (refinementFilters.length == 1) {
                            searchQuery.Querytext = "ContentType:LB Manual AND " + queryText + " " + "LBManualCategory:'" + refinementFilters[0] + "'";
                            searchQuery.Querytext = "ContentType:" + filterOnContentType + " AND " + queryText + " " + "RefinableString04:'" + refinementFilters[0] + "'";
                            //searchQuery.Querytext="ContentType:IndboManual AND " + queryText + " " +"IndboCategory:\"" + refinementFilters[0] + "\"";
                            // searchQuery.Querytext="ContentType:AnsvarManual AND " + queryText + " " +"AnsvarKategori:\"" + refinementFilters[0] + "\"";
                            // searchQuery.Querytext="ContentType:IndboManual AND " + queryText + " " + "IndboCategory=('Vilkårenes+afsnit+8.+Hærværk')";
                            // let myFilter:string[]=[];
                            // myFilter.push("RefinableString02:equals('" + refinementFilters[0] + "')")
                            // searchQuery.RefinementFilters=["IndboCategory:equals('Vilkårenes afsnit 8. Hærværk')"];
                            // searchQuery.RefinementFilters=["LBManualCategory:equals('" + refinementFilters[0] + "')"];
                        }
                        else {
                            searchQuery.Querytext = "ContentType:LB Manual AND " + queryText;
                            searchQuery.Querytext = "ContentType:" + filterOnContentType + " AND " + queryText;
                            //searchQuery.Querytext="ContentType:IndboManual AND " + queryText;    
                            // searchQuery.Querytext="ContentType:AnsvarManual AND " + queryText;    
                        }
                        // searchQuery.RefinementFilters=["LBManualCategory:equals('Diverse')"];
                        searchQuery.SelectProperties = selectProperties;
                        // searchQuery.Querytext="ContentType:LB Manual AND " + queryText + " " +"LBManualCategory:'" + refinementFilters[0] + "'";
                        // searchQuery.Refiners="RefinableString01";
                        searchQuery.Refiners = "RefinableString02";
                        searchQuery.Refiners = refinersMappedProerties;
                        return [4 /*yield*/, sp_pnp_js_1.default.sp.search(searchQuery)];
                    case 1:
                        r = _a.sent();
                        allItemsPromises = [];
                        refinementResults = [];
                        results = {
                            RelevantResults: [],
                            RefinementResults: [],
                            TotalRows: 0,
                        };
                        if (!r.RawSearchResults.PrimaryQueryResult) return [3 /*break*/, 3];
                        return [4 /*yield*/, r.getPage(1, 10)];
                    case 2:
                        r2 = _a.sent();
                        resultRows = r2.RawSearchResults.PrimaryQueryResult.RelevantResults.Table.Rows;
                        refinementResultsRows = r2.RawSearchResults.PrimaryQueryResult.RefinementResults;
                        refinementRows = refinementResultsRows ? refinementResultsRows["Refiners"] : [];
                        resultRows.map(function (elt) {
                            var p1 = new Promise(function (resolvep1, rejectp1) {
                                // Build item result dynamically
                                // We can't type the response here because search results are by definition too heterogeneous so we treat them as key-value object
                                var result = {};
                                elt.Cells.map(function (item) {
                                    result[item.Key] = item.Value;
                                });
                                resolvep1(result);
                            });
                            allItemsPromises.push(p1);
                            // Resolve all the promises once to get news
                        });
                        // Map refinement results                    
                        refinementRows.map(function (refiner) {
                            var values = [];
                            refiner.Entries.map(function (item) {
                                values.push({
                                    //   RefinementCount: (Number)item.RefinementCount,
                                    RefinementCount: Number(item.RefinementCount),
                                    // RefinementName:  this._formatDate(item.RefinementName), //This value will appear in the selected filter bar
                                    RefinementName: item.RefinementName,
                                    RefinementToken: item.RefinementToken,
                                    // RefinementValue: this._formatDate(item.RefinementValue), // This value will appear in the filter panel
                                    RefinementValue: item.RefinementValue // This value will appear in the filter panel
                                });
                            });
                            refinementResults.push({
                                //   FilterName: refiner.RefinementName,
                                FilterName: refiner.Name,
                                Values: values,
                            });
                        });
                        _a.label = 3;
                    case 3: return [4 /*yield*/, Promise.all(allItemsPromises)];
                    case 4:
                        relevantResults = _a.sent();
                        results.RelevantResults = relevantResults;
                        results.RefinementResults = refinementResults;
                        return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     * Find and eeplace ISO 8601 dates in the string by a friendly value
     * @param inputValue The string to format
     */
    SPSearchService._formatDate = function (inputValue) {
        var iso8061rgx = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/g;
        var matches = inputValue.match(iso8061rgx);
        var updatedInputValue = inputValue;
        if (matches) {
            matches.map(function (match) {
                updatedInputValue = updatedInputValue.replace(match, moment(match).format("LL"));
            });
        }
        return updatedInputValue;
    };
    return SPSearchService;
}());
exports.default = SPSearchService;

//# sourceMappingURL=SPSearchService.js.map
