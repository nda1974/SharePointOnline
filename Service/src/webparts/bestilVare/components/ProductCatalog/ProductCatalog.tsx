import * as React from 'react';
import pnp from "sp-pnp-js";
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton, DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { IProductCatalogProps } from './IProductCatalogProps';
import Basket from '../Basket/Basket';


import {
  SPHttpClient,
  SPHttpClientResponse   
 } from '@microsoft/sp-http';
 
import SPListService from '../../Services/SPListService';
import { IProductList, Product } from '../../IProductList';

export interface IProductCatalogState{ 
     products: Product[]; 
     selectedProducts: string[];
   } 
  
export default class ProductCatalog extends React.Component<IProductCatalogProps, IProductCatalogState> {
  
   
  public constructor(props:IProductCatalogProps,{}){  
        super(props);  
        this.state = {"products": props.products,"selectedProducts":[]};
}

  public render(): React.ReactElement<IProductCatalogProps> {
    
    return (
      <div>
        Produkt Katalog
          {this.state.products.map(products => { 
               return  (<div>
               {products.Title} 
                <DefaultButton
                  data-automation-id='test'
                  text='Tilføj kurv'

                  value='asdf'
                  onClick={ ()=>this._searchBtnClicked (products.Title)}/>           
                </div>)
           })} 

      
      <Basket description='My description' products={this.state.selectedProducts} context={this.props.context}  />
      </div>
      
      
      
    );
  }


  private _searchBtnClicked(product?:string):void{
    // var str:IRefinementFilter[]=this.state.;
    // str.push(refinermentName);
    
    // //this.setState({refinementFilters:'asdf'})
    // this.props.callbackSetRefinementFilters(this.state.refinementFilters); 
    if (product==null) {
      
        // this.props.callbackClearRefinementFilters();
    } else {
      var joined = this.state.selectedProducts.concat(product);
      this.setState({ selectedProducts: joined })
    }
    
}
}
