import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() row: number | undefined;;
  @Input() shelf: number | undefined;
  @Input() cell: number | undefined;;

  productList: string[] = [];
  showProductList = false;

  // Метод при отображении товаров
  showProducts() {
    this.productList = ['Товар рпопопрпррпаиваиваива', 'Товар 2', 'Товар 3'];
    this.showProductList = true;
  }

  // Метод при скрытии товаров
  hideProducts() {
    this.showProductList = false;
  }
}
