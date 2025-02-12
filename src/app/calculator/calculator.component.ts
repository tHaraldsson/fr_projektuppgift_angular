import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  @Input() label: string = 'Click me!';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit(); // Emit event when button is clicked
  }

  value: string = '';
  value2: string = '';
  operator: string = '';
  sum: number = 0;
  showResult: boolean = false;

  addition() {
    this.operator = '+';
  }

  subtraction() {
    this.operator = '-';
  }

  division() {
    this.operator = '/';
  }

  multiplication() {
    this.operator = '*';
  }

  updateValue(newValue: string) {
    if (
      this.operator === '+' ||
      this.operator === '-' ||
      this.operator === '/' ||
      this.operator === '*'
    ) {
      this.value2 += newValue;
    } else {
      this.value += newValue;
    }
  }

  operatorBrain() {
    switch (this.operator) {
      case '+':
        this.sum = Number(this.value) + Number(this.value2);
        break;

      case '-':
        this.operator = '-';
        this.sum = Number(this.value) - Number(this.value2);
        break;

      case '/':
        this.sum = Number(this.value) / Number(this.value2);
        break;

      case '*':
        this.sum = Number(this.value) * Number(this.value2);
        break;

      default:
        break;
    }
    this.showResult = true;
  }

  clear(): boolean {
    this.value = '';
    this.value2 = '';
    this.operator = '';
    this.sum = 0;
    return this.showResult = false;
  }

  updateOperator(newOperator: string) {
    this.operator = newOperator;
  }
}
