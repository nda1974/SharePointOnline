import { IRefinementResult } from "../../ISearchResults";
export interface IRefinementPanelProps {
    callbackSetRefinementFilters: any;
    callbackClearRefinementFilters: any;
    "refiners": IRefinementResult[];
}
