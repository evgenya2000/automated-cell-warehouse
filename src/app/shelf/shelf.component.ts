import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent {
  @Input() numOfShelves: number = 5;
  @Input() numOfRows: number = 5;
  @Input() numOfCells: number = 5;

  shelves: number[];
  rows: number[];
  cells: number[];

  constructor() {
    this.shelves = Array.from({length: this.numOfShelves}, (_, i) => i + 1);
    this.rows = Array.from({length: this.numOfRows}, (_, i) => i + 1);
    this.cells = Array.from({length: this.numOfCells}, (_, i) => i + 1);
  }
}
