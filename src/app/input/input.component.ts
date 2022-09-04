import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  expression: string = ""
  expressionValidated: string = ""
  validationStart: boolean = false

  ngOnInit(): void {
  }

  onValidationStart() {
    this.expressionValidated = this.expression;
    this.validationStart = this.expression.length > 0;
  }

}
