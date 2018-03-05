import * as React from 'react';
import { IAppContainerProps } from '../AppContainer/IAppContainerProps';
import { IAppContainerState } from '../AppContainer/IAppContainerState';
export default class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
    private test;
    constructor(props: IAppContainerProps, state: IAppContainerState);
    onQueryTextChanged(newState: any): void;
    onRefinementFiltersChanged(newState?: string): void;
    render(): React.ReactElement<IAppContainerProps>;
}
