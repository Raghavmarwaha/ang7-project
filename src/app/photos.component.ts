import { Component, OnInit } from '@angular/core';
import { photosService } from './photos.service';

@Component({
    selector: 'photos',
    template: `
    <h2> list fo photos</h2>
    <button (click)=addphotos()>add photos</button>
    <table>
    <tr *ngFor="let photo of photos">
    <td>{{photo.id}}</td>
    <td><img [src]="photo.thumbnailUrl"></td>
    </tr>
    </table>
    `,
    styles: [`
    
    `],
    providers:[photosService]
})
export class photosComponent implements OnInit {
    photos:any;
    constructor(private photoservice:photosService) {
        
     }

    ngOnInit(): void { 
        this.photoservice.getphotos().subscribe(photolist=>{
            this.photos=photolist;
        });
    }
    addphotos():void{
        this.photoservice.addphotos().subscribe(res=>{
            console.log(res);
        })
    }
}
