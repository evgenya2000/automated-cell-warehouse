import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numOfRows: number;
  numOfShelves: number;
  numOfCells: number;
  
  rows: number[] | undefined;
  shelves: number[] | undefined;
  cells: number[] | undefined;

  constructor() {
    this.numOfRows = 3;
    this.numOfShelves = 3;
    this.numOfCells = 3;
    this.renderRows();
  }

  renderRows() {
    this.rows = Array.from({ length: this.numOfRows }, (_, i) => i + 1);
    this.cells = Array.from({ length: this.numOfCells }, (_, i) => i + 1);
    this.shelves = Array.from({ length: this.numOfShelves }, (_, i) => i + 1);
    alert(`Создана мнемосхема стелажа. Кол-во стеллажей: ${this.numOfRows}, кол-во полок: ${this.numOfShelves}, кол-во ячеек: ${this.numOfCells}`);
  }
}
