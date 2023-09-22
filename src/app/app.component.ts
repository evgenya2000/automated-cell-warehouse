import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numOfRows: number = 15;
  numOfShelves: number = 3;
  numOfCells: number = 5;
  
  rows: number[];
  shelves: number[];
  cells: number[];

  constructor() {
    this.rows = Array.from({length: this.numOfRows}, (_, i) => i + 1);
    this.cells = Array.from({length: this.numOfCells}, (_, i) => i + 1);
    this.shelves = Array.from({length: this.numOfShelves}, (_, i) => i + 1);
  }
}