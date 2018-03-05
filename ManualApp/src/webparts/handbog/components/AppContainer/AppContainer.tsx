import * as React from 'react';
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { IAppContainerProps } from '../AppContainer/IAppContainerProps';
import { IAppContainerState } from '../AppContainer/IAppContainerState';
import SearchInputContainer from '../SearchInputContainer/SearchInputContainer';
import SearchResultContainer from '../SearchResultContainer/SearchResultContainer';
import RefinementPanel from '../RefinementPanel/RefinementPanel'
import SPSearchService from '../../Services/SPSearchService'

import { ISearchResult,ISearchResults, IRefinementFilter, IManualItem } from '../../ISearchResults' 
// import { ISearchResult } from '../../../../../lib/webparts/manual/ISearchResults';
export default class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
    
    private test:any;
    // private wpContext:IWebPartContext;
    public constructor(props: IAppContainerProps, state: IAppContainerState){  
            super(props);  
            // this.wpContext=webPartCtx;

            this.state = {
                        refinementFilters:[],
                        queryText:'',
                        results: { 
                            RefinementResults: [], 
                            RelevantResults: [] 
                            }
                        };  

        
                    // this.handler = this.handler.bind(this)
                    // this.onChildChanged= this.onChildChanged.bind(this)
                    this.onQueryTextChanged= this.onQueryTextChanged.bind(this);
                    this.onRefinementFiltersChanged= this.onRefinementFiltersChanged.bind(this);
                    this.test=this.state.results.RelevantResults;
    }
                

                onQueryTextChanged(newState) {
                this.setState({ queryText: newState })
                }
                
                onRefinementFiltersChanged(newState?:string) {
                    if (newState==null) {
                        let filters:string[]=this.state.refinementFilters;
                        filters=[];
                        this.setState({ refinementFilters: filters })        
                    } else {
                        let filters:string[]=[];
                        filters.push(newState)
                        this.setState({ refinementFilters: filters })        
                    }
                    // if (newState.length>0) {
                    //     let filters:string[]=this.state.refinementFilters;
                    //     filters.push(newState);
                    //     this.setState({ refinementFilters: filters })        
                    // }
                
                
                }
            
              
    
        public render(): React.ReactElement<IAppContainerProps> {
             let ss: SPSearchService=new SPSearchService(this.props.webPartContext)

            let searchResult:Promise<ISearchResults>=ss.search(this.state.queryText,this.state.refinementFilters,this.props.manualType);
            // let searchResult:Promise<ISearchResults>=SPSearchService.search(this.state.queryText,this.state.refinementFilters);
            // searchResult.then(
            //     (data:any)=>{this.setState({results:data})}
            // );
            let results: ISearchResults = {
                RelevantResults : [],
                RefinementResults: [],
                TotalRows: 0,
            };

            searchResult.then(
                (data:ISearchResults)=>{this.setState({results:data})}

            );
            
            return (
                <div className="ms-Grid">    
              
                <div className="ms-Grid-row">
                
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <SearchInputContainer  description='' callbackSetAppContainerQueryString={(newState) => this.onQueryTextChanged(newState) }/>
                    </div>
                
                
                </div>
              
                
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6">       
                        {/* <RefinementPanel refiners={this.state.results.RefinementResults} refinementFilters={this.state.refinementFilters} callbackSetRefinementFilters={(newState) => this.onRefinementFiltersChanged(newState) }/> */}
                        
                        <RefinementPanel refiners={this.state.results.RefinementResults}  
                                            callbackSetRefinementFilters={(newState) => this.onRefinementFiltersChanged(newState) }
                                            callbackClearRefinementFilters={() => this.onRefinementFiltersChanged(null) }/>
                    </div>
                    <div className="ms-Grid-col ms-sm6">
                    <SearchResultContainer results={this.state.results.RelevantResults} />
                    </div>
                
                </div>
{/* 
                <div className="ms-Grid-row">
                
                    <div className="ms-Grid-col ms-sm12">
                        <SearchResultContainer results={this.state.results.RelevantResults} />
                    </div>
                </div> */}





            
                                    
                    <p>This Query Text state {this.state.queryText}</p>
                    <p>This Refinementfiltes state  {this.state.refinementFilters.map((item,key)=>item)}</p>
                    
                    
                    
                    
                    
                    {/* <SearchResultContainer results={res}/> */}

                    


                                

            </div>
            );
        }
  }