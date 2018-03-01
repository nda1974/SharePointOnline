import WebPartContext from "@microsoft/sp-webpart-base/lib/core/WebPartContext";

export interface IBasketProps{
    description:string;
    products:string[];
    context:WebPartContext;
}