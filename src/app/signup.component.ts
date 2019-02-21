import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'signup',
    templateUrl: 'signupform.component.html',
    
})
export class SignUpComponent implements OnInit {
    user={
        name:"Admin",
        contact:456545455,
        address:"india",
        email:"add@faf.com"
    }
    constructor() { }
    postform(){
        alert("data submitted");
        alert(JSON.stringify(this.user));
    }

    ngOnInit(): void { }
}
