import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unitconversion',
  templateUrl: './unitconversion.component.html',
  styleUrls: ['./unitconversion.component.css']
})
export class UnitconversionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'unit-conversion';
  public km = 0;
  public cm = 0;
  public cel = 0;
}
