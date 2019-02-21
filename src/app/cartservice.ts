import { Injectable } from '@angular/core';
import { Product } from './product';
import { Subject } from 'rxjs-compat/Subject';
//import {  SessionStorageService, SessionStorage } from 'angular-web-storage';



@Injectable()
export class cartService {
    // @SessionStorage()
    cart: Product[];
    myCart:string;
   
    //subject
    private cartSource = new Subject<string>();

    //Notifies about the changes
    //Broadcaster
    cartBrodCaster = this.cartSource.asObservable();

    constructor(){

        //this.cart = [];
        if(this.myCart){
            this.cart = JSON.parse(this.myCart);
        }
        else{
            this.cart = new Array<Product>();
        }

    }
    // Adding product to cart from addto cart component
    addToCart(product:Product):void{
        
        this.cart = this.cart.concat(product);
        this.myCart = JSON.stringify(this.cart);
        this.cartSource.next(this.myCart);  
        console.log(this.cart);
        console.log(this.myCart);
        console.log(this.cartSource);

        // this.cart = this.cart.concat(product);
        // console.log("Added to the cart " +product.name);
        // console.log(this.cart);
    }

    //getting product in cart details
    getCartItems():Product[] 
    {
        console.log(this.cart);
        return (this.cart);
    }
    removeFromcart(index:number):void{
        this.cart.splice(index,1);
        console.log("Removed from the cart");
        this.myCart = JSON.stringify(this.cart);
        this.cartSource.next(this.myCart);
    }


}

