import WebPartContext from '@microsoft/sp-webpart-base/lib/core/WebPartContext';
export interface IAppContainerProps {
    description: string;
    manualType: string;
    webPartContext: WebPartContext;
}
