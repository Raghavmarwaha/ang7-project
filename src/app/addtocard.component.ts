import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { cartService } from './cartservice';


@Component({
    selector: 'addtocart',
    template: `
    <button (click) = "addproduct()"> Add to Cart </button>
    `,
    styles: [``],

    
    // ethe comment isiliye kita kyunki aapa nu app level te array update krna hai is krke eh providers nu comment krke aapa 
    // app.component.ts te likhya providers 
    // providers:[cartService]

})
export class addToCartComponent  {
    //@input() annotation to have communicate between parent to child;
    @Input()
    selectedProduct:Product;
    constructor(private cartService: cartService) { 
       
    }
   

        addproduct(){
            // alert("Hi");
            // alert(this.selectedProduct.name);
            this.cartService.addToCart(this.selectedProduct);
            
        }
        

    

}
