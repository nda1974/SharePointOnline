import * as React from 'react';
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { IAppContainerProps } from '../AppContainer/IAppContainerProps';
import { IAppContainerState } from '../AppContainer/IAppContainerState';
import Basket from '../Basket/Basket';
import ProductCatalog from '../ProductCatalog/ProductCatalog';
import {  IProductList } from '../../IProductList';
import SPListService from '../../Services/SPListService';
// import { ISearchResult } from '../../../../../lib/webparts/manual/ISearchResults';
export default class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
    
    public constructor(props: IAppContainerProps, state: IAppContainerState){  
            super(props);  
            
        // this.state = {
        //         description:'',
        //         ProductList:{Products:[]}
        //         };  
              
    }

    // public render(): React.ReactElement<IAppContainerProps> {
        public render(): React.ReactElement<IAppContainerProps> {
            
        // let ss: SPListService=new SPListService(this.props.webPartContext);
        // // let arr:IProductItem[]=[];
        // try {
        //     let searchResult:Promise<IProductList>=ss.GetProducts();
        //     searchResult.then(
        //         (data:IProductList)=>{this.setState({ProductList:data})}        
        //     );
        //     ss.GetProducts().then((response) => {  
        //         let Item:IProductList={
        //             Products:[]
        //         };
        //                     console.log(response);
        //     (data:IProductList)=>{this.setState({ProductList:data})}        
        //     // (data:IProductList)=>{this.setState({ProductList:response})}        
            
          
        // });
        // } catch (error) {
        //     console.log(error);
        // }
        



        
        return (
            <div className="ms-Grid">    
                {/* <ProductCatalog description={this.state.description} ProductList={this.state.ProductList} />
                <Basket  description=""/> */}
            </div>
        );
    }
  }