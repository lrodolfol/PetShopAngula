import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

//se nao tivesse esse root, eu precisaria colocar essa injeção de dep direto no aquivo
//tipo o fromservices do aspnet

export class DataService {
    constructor(private http: HttpClient) {}

    getProducts() : Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/v1/products');
    }
}