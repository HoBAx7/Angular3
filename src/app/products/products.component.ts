import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products=[
    {id:1,name:'Samsung S22',price:'109',color:'Blue',available:'Available',image:'assets/product/i1.jpg'},
    {id:2,name:'iphone 14',price:'130',color:'White',available:'Not Available',image:'assets/product/i2.jpg'},
    {id:3,name:'ultra SmartTV',price:'144',color:'Black',available:'Available',image:'assets/product/i3.jpg'}
  ]
}
