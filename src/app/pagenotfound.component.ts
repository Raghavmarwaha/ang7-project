        
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pagenotfound',
    template: `
    <h2> Error 404 Pagenot Found </h2>
    `,
    styles: [`
    h2{
        color:red;
        font-size: xx-large;
    }
    `]
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

        