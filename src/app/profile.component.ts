        
import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
    selector: 'profile',
    template: `
    <h2>profile component<h2>
    <!--profile name is {{profilename}}-->
    <input type="text" [(ngModel)]="profilename">
    <button (click)="updatename()">update</button><br>
    Profile name is {{profilename}}
    `,
    
})
export class profileComponent  {
    @Input()
    profilename:string;
    constructor() { 

        //this.profilename="admin";
    }
    @Output()
    update:EventEmitter<string>=new EventEmitter<string>();
    updatename(){
        this.update.emit(this.profilename);
    }
}