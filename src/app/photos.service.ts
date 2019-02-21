import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Injectable()

export class photosService {
    constructor(private httpClient:HttpClient){

    }

    getphotos():Observable<any>{
        return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
    }
    addphotos():Observable<any>{
        return this.httpClient.post('https://jsonplaceholder.typicode.com/photos',{
        albumId: 1,
        title: "some new title",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
    });
    }

}