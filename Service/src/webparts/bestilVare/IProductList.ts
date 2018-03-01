export interface IProductList {
    Title: string;
}



export class Product implements IProductList{
    constructor(title:string){
        this.Title=title;
    }

public Title:string;
}

