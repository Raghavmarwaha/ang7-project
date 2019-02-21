import { Injectable } from '@angular/core';
@Injectable()
export class MenuService {
    menuItems: string[];
    constructor() {
        this.menuItems = ["Login", "Products", "CartDetails","Profile","SomeLinks","photos","signup"];
    }
    getItems(): string[]{
        return this.menuItems;
    }
}