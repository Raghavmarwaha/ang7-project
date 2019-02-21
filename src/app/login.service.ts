import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LoginService {

 sub:Subject<string>=new Subject<string>();
 setUserName(userName:string){
     this.sub.next(userName);
 }
 getUserName():Observable<string>{
    return this.sub.asObservable();
}

}