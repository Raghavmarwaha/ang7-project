        
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService} from './products.service';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';

@Component({
    selector: 'productdetails',
    template: `
    <h2> product details for product id</h2>
    <div *ngFor="let product of products">
    <div *ngIf="product.id===productid">
    <span>{{product.name}}</span>
    <span>{{product.price}}</span>
    <span>{{product.category}}</span>
    <img [src]="product.imgPath">
 </div>
    
    </div>
    `,
    styles: [`
    img{
        width:200px;
        height:200px;
    }
    h2,span{
        color:maroon;
        width:auto;
    }
    div{
        font-weight:bold;
        font-style:italic;
    }
    `] ,
    providers:[ProductsService]   
})
export class productdetailsComponent   implements OnInit {
    productid:number;
    products:Product[];
    constructor( private activatedroute:ActivatedRoute,
        private productservice:ProductsService) { 
        this.products=this.productservice.getProducts();
    }

  ngOnInit() {
      this.activatedroute.params.subscribe(parameter=>{
          this.productid=parseInt(parameter['id']);
      })
      
  }
}

        