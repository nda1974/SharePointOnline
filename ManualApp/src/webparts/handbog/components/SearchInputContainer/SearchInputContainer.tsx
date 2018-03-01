import * as React from "react";
import * as ReactDom from 'react-dom';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import AppContainer from '../AppContainer/AppContainer'
import {ISearchInputContainerProps} from '../SearchInputContainer/ISearchInputContainerProps'
import {ISearchInputContainerState} from '../SearchInputContainer/ISearchInputContainerState'
export default class SearchInputContainer extends React.Component<ISearchInputContainerProps, ISearchInputContainerState> {
    
    public constructor(props:ISearchInputContainerProps, state:ISearchInputContainerState){  
            super(props);  
            this.state = {  
                            "queryText":""
            };  
    }

    public render(): React.ReactElement<ISearchInputContainerProps> {  
        return(
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                    
                        <TextField
                        onChanged={ (newValue:string) => {this.setState({queryText: newValue});} }
                        value={this.state.queryText}
                        />
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        <DefaultButton
                                    data-automation-id='test'
                                    text='Search'
                                    onClick={ ()=>this._searchBtnClicked ()}
                                    />
                                    {/* <DefaultButton text='SPfX' onClick = {this.props.handler}/ > */}
            
                    </div>
                </div>

                
            </div>
           
        );
        
    }
    
    private _searchBtnClicked():void{
        this.props.callbackSetAppContainerQueryString(this.state.queryText); 
    }

    
  }
