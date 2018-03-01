import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'BestilVareWebPartStrings';
import { IProductCatalogProps } from './components/ProductCatalog/IProductCatalogProps';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import SPListService, { ISPListService } from './Services/SPListService';
import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';
import { IProductList, Product } from './IProductList';
import { IBasketProps } from './components/Basket/IBasketProps';
import Basket from './components/Basket/Basket';
import { IAppContainerProps } from './components/AppContainer/IAppContainerProps';
import AppContainer from './components/AppContainer/AppContainer';
import { IBestilVareProps } from '../../../lib/webparts/bestilVare/components/IBestilVareProps';




export interface IBestilVareWebPartState {
  order:Product[];
}

export interface IBestilVareWebPartProps {
  description: string;
  webPartContext:WebPartContext;
}

export default class BestilVareWebPart extends BaseClientSideWebPart<IBestilVareWebPartProps> {
  private spListService: ISPListService;


  
  protected onInit():Promise<void>{
    
    this.spListService= new SPListService(this.context); 

    return super.onInit();
  }
  public render():void {
    this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Loading Products...");
    

      this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Loading Products...");
      
      this.spListService.getProducts().then((products) => { 
        this.context.statusRenderer.clearLoadingIndicator(this.domElement);
        ReactDom.render(React.createElement(ProductCatalog, { 
          "products": products,"context":this.context}), this.domElement);
      });
    


    


  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
