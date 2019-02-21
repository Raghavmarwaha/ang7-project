import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    template: `
    <h2>Login component</h2>
   <!-- username:<input type="text" [value]="name"  #inputname (change)="update(inputname.value)"/><br><br> -->
   username:<input type="text" [(ngModel)]="name" /><br><br>
    password:<input type="password" [value]="password" />
    <button (click)="login()">login</button>
    `,
})
export class LoginComponentent  {
    name:string="admin";
    password:string="admin";
    constructor(private loginService:LoginService){

    }
    login():void{
        this.loginService.setUserName(this.name);
        console.log("settin username"+this.name);
    }
    update(username):void{
        this.name=username;
    }

}

        

        
