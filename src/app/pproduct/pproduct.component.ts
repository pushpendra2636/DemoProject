import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pproduct',
  templateUrl: './pproduct.component.html',
  styleUrls: ['./pproduct.component.css']
})
export class PproductComponent {
 title="popular fruit items";
public fruits = [
    { name: 'apple', title:'apple' },
    { name: 'lemion', title:'lemion'},
    { name: 'banaba', title:'banana' },
    { name: 'pineapple', title: 'pineapple' },
  ];
constructor() { }
}
