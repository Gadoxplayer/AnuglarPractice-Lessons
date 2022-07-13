import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-manager',
  templateUrl: './numbers-manager.component.html',
  styleUrls: ['./numbers-manager.component.css']
})
export class NumbersManagerComponent implements OnInit {

  // numbers: number[] = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
