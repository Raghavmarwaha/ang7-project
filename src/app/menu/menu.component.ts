import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  // registering service using provider
  providers: [MenuService]
})
export class MenuComponent {
  menuItems:string[];
  //injecting service to component
  //creating a variable menuService passed as a parameter
  // to constructor and initiale it
  constructor(private menuService:MenuService) {    
    //this.menuItems  = ["Login", "Products", "Cart Details"];
      this.menuItems = menuService.getItems();

  }  
}
