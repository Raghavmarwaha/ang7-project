export class Product{
    id:number;
    name:String;
    imgPath:string;
    price:number;
    category:string;
    constructor( id:number,name:String,imgPath:string,price:number,category:string){
        this.id=id;
        this.name=name;
        this.imgPath=imgPath;
        this.price=price;
        this.category=category       
    }
}