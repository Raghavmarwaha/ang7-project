import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
    selector: 'products',
    template: `
    <!--Search Product: <input type='text' (blur)='doSearch($event.target.value)'>-->
    <!-- # template reference variable  -->
    Enter Product:- <input type='text' #search
    (blur)='doSearch(search.value)'/><br/><br/>

    <!-- <greet #myGreet></greet> -->
    <!--<h1>{{myGreet.name}}</h1> -->
    <table border="3px solid black" align="center">
    <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product Image</th>
            <th>Category</th>
            <th colspan='3'>Actions</th>
    </tr>
    <tr *ngFor= "let product of products">
        <td>{{ product.id }}</td>
        <!-- <td><a href="#">{{ product.name }}</a></td>-->               
    <td><a [routerLink]="['productdetails',product.id]">{{product.name}}</a></td>
        <td>{{ product.price }}</td>
        <!--property binding- one way data binding using interpolation-->
        <!--<td><img src="{{ product.imgPath }}"></td>-->
        <!--property binding using []-->
        <!--<td><img [src]=product.imgPath></td>-->
        <!--property binding using bind-src-->
        <td><img bind-src=product.imgPath></td>
        <td>{{ product.category }}</td>
        <td><button *ngIf = "isAdmin" (click) = 'showDetails(product)'>Details</button></td>
        <td><button  [disabled] = "!isAdmin">Edit</button></td>
        <addtocart [selectedProduct]="product">addtocat</addtocart>
    </tr>
    </table>
    <div><router-outlet></router-outlet></div>
    `,
    styles: [`
    img{
        width:auto;
        height:100px;
    }`],
    providers:[ProductsService]
  })
export class ProductsComponent {
    products: Product[] = [];
    isAdmin: boolean = true;
    constructor(private productsService: ProductsService) {
        //instantiating products
        // let p1 = new Product(1, "OnePlus 5", "./assets/images/1.jpg", 37999, "Mobile");
        // let p2 = new Product(2, "Moto G5 Plus", "./assets/images/2.jpg", 13999, "Mobile");
        // let p3 = new Product(3, "Nokia 6", "./assets/images/3.jpg", 14999, "Mobile");
        // let p4 = new Product(4, "Samsung Galaxy Note 8", "./assets/images/4.jpg", 67900, "Mobile");
        // let p5 = new Product(5, "Apple Iphone 8", "./assets/images/5.jpg", 64000, "Mobile");
        // let p6 = new Product(6, "Dell Laptop", "./assets/images/6.jpg", 52000, "Laptop");
        // let p7 = new Product(7, "Canon DSLR", "./assets/images/7.jpg", 65000, "Camera");
        // let p8 = new Product(8, "HP Printer", "./assets/images/8.jpg", 4000, "Printer");
        // let p9 = new Product(9, "Apple iPad", "./assets/images/9.jpg", 24900, "Tab");
        // this.products[0] = p1;
        // this.products[1] = p2;
        // this.products[2] = p3;
        // this.products[3] = p4;
        // this.products[4] = p5;
        // this.products[5] = p6;
        // this.products[6] = p7;
        // this.products[7] = p8;
        // this.products[8] = p9; 

        //getting products from service !
        //console.log("getting product from serrvice");
        this.products = productsService.getProducts();
    }

    doSearch(searchStr:string){
       var  prodNames: String[]=[];      
        for(var i in this.products){
            if(this.products[i].name.toLowerCase()
               .startsWith(searchStr.toLowerCase())){
                prodNames[i] = this.products[i].name;
            }
        }
        alert(prodNames);

    }
    showDetails(product) {
        alert(product.category + ' ' + product.name + ' Rs ' + product.price);
    }

}
