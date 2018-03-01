import { ISearchResults } from "../../ISearchResults";

export interface IAppContainerState{  
    "queryText":string,
    "refinementFilters":string[],
    "results":ISearchResults
}  