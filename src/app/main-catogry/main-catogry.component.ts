import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-catogry',
  templateUrl: './main-catogry.component.html',
  styleUrls: ['./main-catogry.component.css']
})
export class MainCatogryComponent{

  constructor() { }
 public cards = [
    { name: 'greens', title: 21 },
    { name: 'greens4', title: 24 },
    { name: 'greens6', title: 18 },
    { name: 'images3', title: 18 },
    { name: 'greens7', title: 18 },
    { name: 'greens8', title: 18 }
  ];

}
