import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable ({
    // se nao tivesse esse toor, eu deveria injetar diretamente na classe que tem essa como injetavel 
    //usando o root, ele fica ja disponivel dentro do app.module da raiz
    providedIn: 'root'
})

//se nao tivesse esse root, eu precisaria colocar essa injeção de dep direto no aquivo
//tipo o fromservices do aspnet

export class DataService {
    public url = 'http://localhost:3000/v1';

    constructor(private http: HttpClient) {}

    getProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    authenticate(data : any) {
        return this.http.get<Product[]>(`${this.url}/account/authenticate`, data);
    }
}