import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { Dialog } from '@microsoft/sp-dialog';
import {
  BaseApplicationCustomizer, 
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';

import styles from './HeaderAndFooterApplicationCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset'; 

import * as strings from 'HeaderAndFooterApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HeaderAndFooterApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHeaderAndFooterApplicationCustomizerProperties {
  // This is an example; replace with your own property
  Top: string;
  Bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HeaderAndFooterApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderAndFooterApplicationCustomizerProperties> {
 // These have been added
 private _topPlaceholder: PlaceholderContent | undefined;
 private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {

    // Added to handle possible changes on the existence of placeholders.
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);

    // Call render method for generating the HTML elements.
    this._renderPlaceHolders();
    return Promise.resolve<void>();

   
  }


  private _renderPlaceHolders(): void {

  //   console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');
  //   console.log('Available placeholders: ',
  // this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', '));

    // Handling the top placeholder
    if (!this._topPlaceholder) {
  this._topPlaceholder =
    this.context.placeholderProvider.tryCreateContent(
      PlaceholderName.Top,
      { onDispose: this._onDispose });

  // The extension should not assume that the expected placeholder is available.
  if (!this._topPlaceholder) {
    console.error('The expected placeholder (Top) was not found.');
    return;
  }

  if (this.properties) {
    let topString: string = this.properties.Top;
    if (!topString) {
      topString = '(Top property was not defined.)';
    }

    if (this._topPlaceholder.domElement) {
        this._topPlaceholder.domElement.innerHTML = `
        <div class='msGrid'>
          <div class="class=msGrid-row ms-fontColor-white ms-fontSize-su ms-bgColor-themePrimary">
          
          LB Forsikring Intranet
          </div>
          <div class="class=msGrid-row ms-fontColor-white ms-fontSize-su ms-bgColor-themePrimary">
          <div class="ms-Grid-col ms-lg3 ms-bgColor-themeDark">A</div>
          <div class="ms-Grid-col ms-lg3 ms-bgColor-themeDarker ${styles.lbTopPlaceHolder}">A</div>
          <div class="ms-Grid-col ms-lg3 ${styles.lbTopPlaceHolder}">B</div>
          <div class="ms-Grid-col ms-lg3">A</div>
          
            
          </div>
        </div>`;
    }
  }
    }

    // Handling the bottom placeholder
    if (!this._bottomPlaceholder) {
  this._bottomPlaceholder =
    this.context.placeholderProvider.tryCreateContent(
      PlaceholderName.Bottom,
      { onDispose: this._onDispose });

  // The extension should not assume that the expected placeholder is available.
  if (!this._bottomPlaceholder) {
    console.error('The expected placeholder (Bottom) was not found.');
    return;
  }

  if (this.properties) {
    let bottomString: string = this.properties.Bottom;
    if (!bottomString) {
      bottomString = '(Bottom property was not defined.)';
    }

    if (this._bottomPlaceholder.domElement) {
      this._bottomPlaceholder.domElement.innerHTML = `
        <div class=${styles.lbTopPlaceHolder}>
          <div class="ms-bgColor-themePrimary ms-fontColor-white ">
            <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(bottomString)}
          </div>
        </div>`;
    }
  }
    }
  }




  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }

  
}
