import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  beverage: string = 'Eggnog';
  beverageList = ['Milk', 'Tea', 'Sahleb', 'Cocoa'];

  addBev(newBev: string) {
    this.beverageList.push(newBev);
  }
}
