import * as React from "react";
import { IRefinementPanelProps } from "./IRefinementPanelProps";
import { IRefinementPanelState } from "./IRefinementPanelState";
export default class RefinementPanel extends React.Component<IRefinementPanelProps, IRefinementPanelState> {
    constructor(props: IRefinementPanelProps, state: IRefinementPanelState);
    callbackSetRefinementFilters(newState: any): void;
    render(): React.ReactElement<IRefinementPanelProps>;
    private _removeFilter();
    private _searchBtnClicked(refinermentName?);
}
