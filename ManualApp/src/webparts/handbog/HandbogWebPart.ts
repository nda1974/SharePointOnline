import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneChoiceGroup,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import * as strings from 'HandbogWebPartStrings';
import AppContainer from './components/AppContainer/AppContainer';
import { IAppContainerProps } from './components/AppContainer/IAppContainerProps'
import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';

//https://www.codeproject.com/Articles/1206669/SharePoint-Framework-aka-SPFx-Web-part-using-React
export interface IHandbogWebPartProps {
  description: string;
  manualType:string;
}

export default class HandbogWebPart extends BaseClientSideWebPart<IHandbogWebPartProps> {

  public render(): void {
    
    // this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Henter Håndbøger...");
    const element: React.ReactElement<IAppContainerProps> = React.createElement(
    AppContainer,
    {
      description: this.properties.description,
      manualType:this.properties.manualType,
      webPartContext:this.context
    }
    );

    

    ReactDom.render(element, this.domElement);

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
              
            },
            {
              groupName: 'Håndbog',
              groupFields: [
                PropertyPaneChoiceGroup('manualType',{
                  label:'Vælg håndbog',
                  options:[{ key: 'Indbo', text: 'Indbo', checked: true }, 
                       { key: 'Skade', text: 'Skade' }, 
                       { key: 'Hund', text: 'Hund' } 
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
