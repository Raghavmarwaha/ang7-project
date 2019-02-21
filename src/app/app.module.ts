import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage'
import {Routes,RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet.component';
import { MenuComponent } from './menu/menu.component';
import { AppIIComponent } from './app-ii/app-ii.component';
import { Product } from './product';
import { ProductsComponent } from './products.component';
import { addToCartComponent } from './addtocard.component';
import { cartdetailsComponent } from './carddetails.component';

import {FormsModule} from '@angular/forms'
import { LoginComponentent } from './login.component';
import { headercomponent } from './header.component';
import { LoginService } from './login.service';
import { profileComponent } from './profile.component';
import {PageNotFoundComponent} from './pagenotfound.component';
import {productdetailsComponent} from './productdetails.component';
import { photosComponent } from './photos.component';
import { SignUpComponent } from './signup.component';




let routes=
[
  {
    path: '',//default
    component: GreetComponent
  },

  {
    path: 'login',
    component: LoginComponentent
  },
  {
    path: 'products',
    component: ProductsComponent,
    children:[{
      path:'productdetails/:id',
      component:productdetailsComponent
    }]
  },
  {
    path: 'cartdetails',
    component: cartdetailsComponent
  },
  {
    path: 'profile',
    component: profileComponent
  },
  {
    path: 'photos',
    component: photosComponent
  },
  
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: '**',//default
    component: PageNotFoundComponent
  }

  
 
]


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    MenuComponent,
    AppIIComponent,
    ProductsComponent,
    addToCartComponent,
    cartdetailsComponent,
    LoginComponentent,
    headercomponent,
    profileComponent,
    PageNotFoundComponent,
    productdetailsComponent,
    photosComponent,
    SignUpComponent
    
    

  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent, AppIIComponent]
  // By default the scope of angular change detection is the whole
  // component tree.You may want to bootstrap diff component separately
  // so that chnage detection runs in a smaller scope so bootstrap different component
})
export class AppModule { }
