import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numOfShelves = 5; // Количество стеллажей
  numOfRows = 3; // Количество полок на стелаже
  numOfCells = 6; // Количество ячеек на полке
}
