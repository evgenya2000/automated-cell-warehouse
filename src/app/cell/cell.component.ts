import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() shelf: number = 0;
  @Input() row: number = 0;
  @Input() cell: number = 0;

  productList: string[] = [];
  showProductList = false;

  showProducts() {
    // Ваша логика для отображения списка товаров в ячейке
    this.productList = ['Товар 1', 'Товар 2', 'Товар 3'];
    this.showProductList = true;
  }

  hideProducts() {
    this.showProductList = false;
  }
}
