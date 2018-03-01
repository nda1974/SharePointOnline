import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
 PropertyPaneTextField,
 PropertyPaneCheckbox,
 PropertyPaneDropdown,
 PropertyPaneToggle

} from '@microsoft/sp-webpart-base';

import * as strings from 'NavigationBoxWebPartStrings';
import NavigationBox from './components/NavigationBox';
import { INavigationBoxProps } from './components/INavigationBoxProps';
import { PropertyPaneChoiceGroup } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneChoiceGroup/PropertyPaneChoiceGroup';


export interface INavigationBoxWebPartProps {
  linkText: string;
  linkUrl: string;
  color: string;
}

export default class NavigationBoxWebPart extends BaseClientSideWebPart<INavigationBoxWebPartProps> {

  public render(): void {
    console.log(this.properties)
    const element: React.ReactElement<INavigationBoxProps > = React.createElement(
      NavigationBox,
      {
        linkText: this.properties.linkText,
        linkUrl: this.properties.linkUrl,
        color:this.properties.color
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
            description: 'Navigation box'
          },
          groups: [
            {
              groupName: 'Link',
              groupFields: [
                PropertyPaneTextField('linkText', {
                  label: 'Link tekst'
                }),
                PropertyPaneTextField('linkUrl', {
                  label: 'Link adresse'
                })
              ]
            },{
              groupName: 'Farve',
              groupFields: [
                PropertyPaneChoiceGroup('color',{
                  label:'Vælg LB farve',
                  options:[{ key: 'Primary', text: 'Primær farve', checked: true }, 
                       { key: 'Secondary', text: 'Sekundær farve' }, 
                       { key: 'Alternative', text: 'Alternativ farve' } 
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
