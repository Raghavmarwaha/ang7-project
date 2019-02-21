import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'header',
    template:`
    <h2>welcome{{username}}</h2>`,
    styles:[``]
})
export class headercomponent  {
    username:string;
    constructor(private loginService:LoginService) {
        this.loginService.getUserName().subscribe(newName=>{
            this.username=newName;
        })
     }


}

        