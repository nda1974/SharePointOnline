
/*?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"1b7d5588-be08-4312-82e8-36d9f840e2e9":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"Top":"Top area of the page","Bottom":"Bottom area in the page"}}}*/
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';

import { escape } from '@microsoft/sp-lodash-subset'; 
import {
  BaseApplicationCustomizer, 
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import * as strings from 'BrandingExtensionApplicationCustomizerStrings';
import styles from './BrandingExtensionApplicationCustomizer.module.scss';

const LOG_SOURCE: string = 'BrandingExtensionApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IBrandingExtensionApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  Top: string;
  Bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class BrandingExtensionApplicationCustomizer
  extends BaseApplicationCustomizer<IBrandingExtensionApplicationCustomizerProperties> {
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

    
    // Handling the top placeholder
    if (!this._topPlaceholder) {
    this._topPlaceholder =this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top,{ onDispose: this._onDispose });

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
        <div class="${styles.app}">
          <div class="ms-Grid">
            <div class="ms-Grid-row  ms-fontColor-white">
              <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3 ${styles.lbColumns}">
                <div> A </div>
              </div>
              <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3 ${styles.lbColumns}">
                <div > A </div>
              </div>
              <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3 ${styles.lbColumns}">
                <div > A </div>
              </div>
              <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3 ${styles.lbColumns}">
                <div > A </div>
              </div>
            </div>
          </div>
        </div>`;
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
            <div class="${styles.app}">
              <div class="ms-bgColor-themeDark ms-fontColor-white">
                <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(bottomString)}
              </div>
            </div>`;
        }
      }
    }
  }
  }
  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }
}
