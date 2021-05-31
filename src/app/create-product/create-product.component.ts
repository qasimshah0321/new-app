import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import {IProduct} from '../Interface/IProduct'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  @Input() product: IProduct[] = [];
  public ProductName: string;
  public ProductCatagory : String
  public ProductBrand: string;
  public ProductColor: String;
  public ProductPrice: Number;
  public ProductLength: Number;
  public ProductWaist: Number;

  constructor(private http: HttpClient) {

    this.ProductName = '';
    this.ProductCatagory = '';
    this.ProductBrand = '';
    this.ProductColor = '';
    this.ProductPrice = 0;
    this.ProductLength = 0;
    this.ProductWaist = 0;



  }

  ngOnInit(): void {
  }

  public ProductFormData(){
    const product = {
      name: this.ProductName,
      catagory: this.ProductCatagory,
      brand: this.ProductBrand,
      color: this.ProductColor,
      price: this.ProductPrice,
      length: this.ProductLength,
      waist: this.ProductWaist
    }

    this.http.post<any>('http://localhost:3000/api/product', product).subscribe(data => {
        console.log(data._id);
    })

  }

}
