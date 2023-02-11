import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  public products$?: Observable<any[]>;
  title?: string = "teste";
  
  constructor(private data : DataService) {
  }

  ngOnInit() {
    this.products$ = this.data.getProducts();
  }

}
