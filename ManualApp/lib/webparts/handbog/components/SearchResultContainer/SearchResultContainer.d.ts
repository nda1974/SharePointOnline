import * as React from "react";
import { ISearchResultContainerProps } from "./ISearchResultContainerProps";
import { ISearchResultContainerState } from "./ISearchResultContainerState";
export default class SearchResultContainer extends React.Component<ISearchResultContainerProps, ISearchResultContainerState> {
    private queryText;
    constructor(props: ISearchResultContainerProps, state: ISearchResultContainerState);
    render(): React.ReactElement<ISearchResultContainerProps>;
}
