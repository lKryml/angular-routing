import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.scss'],
})
export class BeverageComponent {
  @Input() currentBeverage = 'tea';
  @Output() newBevEvent = new EventEmitter<string>();

  addBevarage(value: string) {
    this.newBevEvent.emit(value);
  }
}
