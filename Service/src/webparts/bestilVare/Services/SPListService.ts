import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';
import pnp from "sp-pnp-js";
import { IProductList, Product } from "../IProductList";

export interface ISPListService{ 
         getProducts():Promise<IProductList[]>; 
    } 
    
export default class SPListService{
    private _context: IWebPartContext;
    private httpClient: SPHttpClient; 
    private products: Product[]; 
    private webAbsoluteUrl: string; 
    

    public constructor(webPartContext: IWebPartContext) {
        this._context = webPartContext;
        this.httpClient = webPartContext.spHttpClient;
        this.products = new Array();
        this.webAbsoluteUrl = webPartContext.pageContext.web.absoluteUrl;

        this.getProducts = this.getProducts.bind(this);
        this.addProduct= this.addProduct.bind(this);

    }

    public async getProducts():Promise<Product[]>{
        let url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Products')/items?$select=Title";
        this.products = [];

        return this.httpClient.get(url, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
            return response.json().then((data) => {
                data.value.forEach(c => {
                    this.products.push(new Product(c.Title));
                });
                return this.products;
            });
        });
    }


    public addProduct(title:string): void { 
        
         
                 let url = this.webAbsoluteUrl + "/_api/Lists/getByTitle('Orders')/items"; 
                 url="https://lboffice365.sharepoint.com/sites/Service/_api/Lists/getByTitle('Orders')/items"
                 const httpClientOptions: ISPHttpClientOptions = { 
                     body:JSON.stringify({ 
                         Title: title
                     }) 
                 }; 
                  
                 this.httpClient.post(url, SPHttpClient.configurations.v1, httpClientOptions) 
                .then((response: SPHttpClientResponse) => { 
                    console.log(response);
                 }); 
             } 
        

}