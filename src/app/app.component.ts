        
import { Component } from '@angular/core';
import { cartService } from './cartservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[cartService]
})
export class AppComponent {
  title = 'mydemo';
  name="Admin";
  updateEventListner(args:any){
    alert("event raise by child with some values "+ args);
    this.name=args;

  }
}

        