import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { ISearchResults } from '../ISearchResults';
export default class SPSearchService {
    private _context;
    constructor(webPartContext: IWebPartContext);
    search(queryText: string, refinementFilters: string[], manualType: string): Promise<ISearchResults>;
    /**
     * Find and eeplace ISO 8601 dates in the string by a friendly value
     * @param inputValue The string to format
     */
    private static _formatDate(inputValue);
}
