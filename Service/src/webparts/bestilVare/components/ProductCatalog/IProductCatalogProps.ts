import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { IProductList,Product } from "../../IProductList";
import WebPartContext from "@microsoft/sp-webpart-base/lib/core/WebPartContext";
export interface IProductCatalogProps {
  products:Product[];
  context:WebPartContext;
}

 
 
