import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.services';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
  //providers: [DataService] 'como eu já uso o Injectable({root}) da classe data.service, eu nao preciso injetar ele aqui
})
export class ProductsPageComponent implements OnInit {
  public products$?: Observable<Product[]>;
  title?: string = "teste";

  constructor(private data : DataService) {
  }

  ngOnInit() {
    this.products$ = this.data.getProducts();
  }

}
