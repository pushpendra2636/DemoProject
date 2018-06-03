import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-uping',
  templateUrl: './p-uping.component.html',
  styleUrls: ['./p-uping.component.css']
})
export class PUpingComponent  {
 title ="Uping fruit products";
  constructor() { }
   public fruits = [
    { name: 'apple', title:'apple' },
    { name: 'blackbary ', title:'blackbary'},
    { name: 'fruts2', title:'lichy' },
    { name: 'fruts3', title: 'pineapple' },
  ];

}
