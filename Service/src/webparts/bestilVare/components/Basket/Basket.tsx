import * as React from 'react';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton, DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { IBasketProps } from './IBasketProps';
import {Product } from '../../IProductList';
import SPListService, { ISPListService } from '../../Services/SPListService';

export interface IBasketState{ 
  products: Product[]; 
} 

export default class Basket extends React.Component<IBasketProps, {}> {
  
   
  public constructor(props:IBasketProps,{}){  
        super(props);  
}

  public render(): React.ReactElement<IBasketProps> {
    return (
      <div>
        BASKET - {this.props.products}
        
        <DefaultButton
                  data-automation-id='test'
                  text='Bestil varer'

                  value='asdf'
                  onClick={ ()=>this._checkoutBtnClicked ()}/>           
        
      </div>
    );
  }


  private _checkoutBtnClicked():void{
    var spListService= new SPListService(this.props.context); 
    spListService.addProduct(this.props.description);
    
  }
}
