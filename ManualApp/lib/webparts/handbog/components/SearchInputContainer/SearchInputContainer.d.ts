import * as React from "react";
import { ISearchInputContainerProps } from '../SearchInputContainer/ISearchInputContainerProps';
import { ISearchInputContainerState } from '../SearchInputContainer/ISearchInputContainerState';
export default class SearchInputContainer extends React.Component<ISearchInputContainerProps, ISearchInputContainerState> {
    constructor(props: ISearchInputContainerProps, state: ISearchInputContainerState);
    render(): React.ReactElement<ISearchInputContainerProps>;
    private _searchBtnClicked();
}
