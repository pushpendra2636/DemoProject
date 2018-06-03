import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callproduct',
  templateUrl: './callproduct.component.html',
  styleUrls: ['./callproduct.component.css']
})
export class CallproductComponent{

  constructor() { }

public products = [
     {
        title: 'latest frouit',
        title2:'Special frout ',
        summary: 'ShopBot comes with a new feature called “SmartBid”, which allows you to occupy the top spot of your category on search results, increasing the visibility of your products throughout the site. You can also boost your visibility ',
        button:'Go',
        offer:'4'
        },
      {
        title: 'popular frouit',
        title2:'popular  frout items',
        summary: 'ShopBot comes with a new feature called “SmartBid”, which allows you to occupy the top spot of your category on search results, increasing the visibility of your products throughout the site. You can also boost your visibility ',
        button:'Go',
        offer:'5'
      },
      {
        title: 'popular search',
        title2:'popular search fruits',
        summary: 'ShopBot comes with a new feature called “SmartBid”, which allows you to occupy the top spot of your category on search results, increasing the visibility of your products throughout the site. You can also boost your visibility ',
        button:'Go',
        offer:'10'
      }
  ];


  clickMe() {
          alert("Go to all product list avilable and chouse products")

  }
}
