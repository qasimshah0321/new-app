import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../Interface/IProduct';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  //public posts: Array<any>;

  @Input() products: IProduct[] = [];


  constructor(private http: HttpClient) {

    this.http.get('http://localhost:30001/product').subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });


  }

  ngOnInit(): void {}
}
