import { IWebPartContext } from "@microsoft/sp-webpart-base";
import {ISearchResult, ISearchResults, IRefinementResult, IRefinementValue, IRefinementFilter} from '../ISearchResults'
import pnp, { ConsoleListener, Logger, LogLevel, SearchQuery, SearchQueryBuilder, SearchResults, setup, Web, Sort, SortDirection } from "sp-pnp-js";
import * as moment from "moment";
import { SearchProperty } from 'sp-pnp-js/lib/sharepoint/search';
export default class SPSearchService{
    private _context: IWebPartContext;


    public constructor(webPartContext: IWebPartContext) {
        this._context = webPartContext;

        //refinablestring00 = AnsvarCategory
        //refinablestring01 = HundCategory
        //refinablestring02 = BaadCategory
        //refinablestring03 = BaadArea
        //refinablestring04 = BilCategory




        // Setup the PnP JS instance
        const consoleListener = new ConsoleListener();
        Logger.subscribe(consoleListener);

        // To limit the payload size, we set odata=nometadata
        // We just need to get list items here
        // We also set the SPFx context accordingly (https://github.com/SharePoint/PnP-JS-Core/wiki/Using-sp-pnp-js-in-SharePoint-Framework)
        setup({
            sp: {
                headers: {
                    Accept: "application/json; odata=nometadata",
                },
            },
            spfxContext: this._context,
        });
    }



    // public static async search(queryText:string,refinementFilters:string[]):Promise<ISearchResults>{
        public async search(queryText:string,refinementFilters:string[],manualType:string):Promise<ISearchResults>{
            
            
            console.log('manualType '  +  manualType);
            if (manualType== 'undefined') {
                return;
            }
            

            let searchQuery: SearchQuery = {};
            let sortedRefiners: string[] = [];
            
            let selectPropertyCategory:string = ""
            let filterOnContentType:string="";
            let refinersMappedProperties:string="";
            let searchQueryQueryText:string="";


            let selectProperties:string[]=['Title','Author','IndboCategory','Path','RefinableString02'];


            switch (manualType.toUpperCase()) {
                case "BAAD":
                    selectProperties=['Title','Author','BaadCategory','Path','RefinableString02','RefinableString02'];
                    filterOnContentType = "BaadManual";
                    refinersMappedProperties= "refinablestring02,refinablestring04";
                    if (refinementFilters.length>0) {
                        
                        searchQueryQueryText="ContentType:"+filterOnContentType+" AND " + queryText + " " +"RefinableString04:'" + refinementFilters[0] + "'";
                        
                    }else{
                        searchQueryQueryText=="ContentType:"+filterOnContentType+" AND " + queryText; 
                    }
                    console.log(manualType.toUpperCase())
                    break;
                case "BIL":
                    selectProperties=['Title','Author','BilCategory','Path','RefinableString04'];
                    filterOnContentType = "BilManual";
                    refinersMappedProperties= "refinablestring04";
                    if (refinementFilters.length==1) {
                        searchQueryQueryText="ContentType:"+filterOnContentType+" AND " + queryText + " " +"RefinableString04:'" + refinementFilters[0] + "'";
                    }else{
                        searchQueryQueryText=="ContentType:"+filterOnContentType+" AND " + queryText; 
                    }
                    
                    console.log(manualType.toUpperCase())
                    break;
                case "HUND":
                console.log(manualType.toUpperCase())
                    selectProperties=['Title','Author','HundCategory','Path','RefinableString02'];
                    filterOnContentType = "HundManual";
                    break;
        
                default:
                    break;
                    
            }
            // let selectProperties:string[]=['Title','Author','AnsvarCategory','Path'];
            let rf:string[]=[];
            if (refinementFilters.length==1) {
                searchQuery.Querytext="ContentType:LB Manual AND " + queryText + " " +"LBManualCategory:'" + refinementFilters[0] + "'";
                searchQuery.Querytext="ContentType:"+filterOnContentType+" AND " + queryText + " " +"RefinableString04:'" + refinementFilters[0] + "'";
                searchQuery.Querytext=searchQueryQueryText;
            }
            else
            {
                searchQuery.Querytext="ContentType:LB Manual AND " + queryText;
                searchQuery.Querytext="ContentType:"+filterOnContentType+" AND " + queryText;    
            }
            searchQuery.SelectProperties=selectProperties;
            searchQuery.Refiners=refinersMappedProperties;
            
            
            const r = await pnp.sp.search(searchQuery);
            
            const allItemsPromises: Promise<ISearchResult>[] = [];
            let refinementResults: IRefinementResult[] = [];
            
            // const allItemsPromises: Promise<ISearchResult>[] = [];
            let results: ISearchResults = {
              RelevantResults : [],
              RefinementResults: [],
              TotalRows: 0,
          };
            if (r.RawSearchResults.PrimaryQueryResult) {
                            
                // Be careful, there was an issue with paging calculation under 2.0.8 version of sp-pnp-js library
                // More info https://github.com/SharePoint/PnP-JS-Core/issues/535
                const r2 = await r.getPage(1,10);
                const resultRows = r2.RawSearchResults.PrimaryQueryResult.RelevantResults.Table.Rows;
                let refinementResultsRows = r2.RawSearchResults.PrimaryQueryResult.RefinementResults;
        
                const refinementRows = refinementResultsRows ? refinementResultsRows["Refiners"] : [];
        
                resultRows.map((elt) => {
        
                    const p1 = new Promise<ISearchResult>((resolvep1, rejectp1) => {
                    
                        // Build item result dynamically
                        // We can't type the response here because search results are by definition too heterogeneous so we treat them as key-value object
                        let result: ISearchResult = {};
        
                        elt.Cells.map((item) => {
                            result[item.Key] = item.Value;
                        });
                        resolvep1(result);
                    });
        
                    allItemsPromises.push(p1);    
                    // Resolve all the promises once to get news
                                
                });
                // Map refinement results                    
                refinementRows.map((refiner:any) => {
                  
                  let values: IRefinementValue[] = [];
                  refiner.Entries.map((item) => {
                      
                      values.push({
                        //   RefinementCount: (Number)item.RefinementCount,
                        RefinementCount:Number(item.RefinementCount),
                        // RefinementName:  this._formatDate(item.RefinementName), //This value will appear in the selected filter bar
                        RefinementName:  item.RefinementName,
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
            }
            const relevantResults: ISearchResult[] = await Promise.all(allItemsPromises);
            results.RelevantResults = relevantResults;
            results.RefinementResults = refinementResults;
            return results;
          
    }
    
    /**
     * Find and eeplace ISO 8601 dates in the string by a friendly value
     * @param inputValue The string to format
     */
    private static _formatDate(inputValue: string): string {
        
        const iso8061rgx = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/g;
        const matches = inputValue.match(iso8061rgx);

        let updatedInputValue = inputValue;

        if (matches) {
            matches.map(match => {
                updatedInputValue = updatedInputValue.replace(match, moment(match).format("LL"));
            });
        }

        return updatedInputValue;        
    }
    
  
}

