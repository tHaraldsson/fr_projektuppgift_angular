import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalculatorState } from './calculator.interface';
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

calculatorState: CalculatorState = {
  value: '',
  value2: '',
  operator: '',
  sum: 0,
  showResult: false
}

  addition() {
    this.calculatorState.operator = '+';
  }

  subtraction() {
    this.calculatorState.operator = '-';
  }

  division() {
    this.calculatorState.operator = '/';
  }

  multiplication() {
    this.calculatorState.operator = '*';
  }

  updateValue(newValue: string) {
    if (
      this.calculatorState.operator === '+' ||
      this.calculatorState.operator === '-' ||
      this.calculatorState.operator === '/' ||
      this.calculatorState.operator === '*'
    ) {
      this.calculatorState.value2 += newValue;
    } else {
      this.calculatorState.value += newValue;
    }
  }

  operatorBrain() {
    switch (this.calculatorState.operator) {
      case '+':
        this.calculatorState.sum = Number(this.calculatorState.value) + Number(this.calculatorState.value2);
        break;

      case '-':
        this.calculatorState.operator = '-';
        this.calculatorState.sum = Number(this.calculatorState.value) - Number(this.calculatorState.value2);
        break;

      case '/':
        this.calculatorState.sum = Number(this.calculatorState.value) / Number(this.calculatorState.value2);
        break;

      case '*':
        this.calculatorState.sum = Number(this.calculatorState.value) * Number(this.calculatorState.value2);
        break;

      default:
        break;
    }
    this.calculatorState.showResult = true;
  }

  clear(): boolean {
    this.calculatorState.value = '';
    this.calculatorState.value2 = '';
    this.calculatorState.operator = '';
    this.calculatorState.sum = 0;
    return this.calculatorState.showResult = false;
  }

  updateOperator(newOperator: string) {
    this.calculatorState.operator = newOperator;
  }
}
