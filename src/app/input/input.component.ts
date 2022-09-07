import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Output() expressionChanged: EventEmitter<string> = new EventEmitter<string>()

  expression: string = ""

  ngOnInit(): void {
  }

  onValidationStart() {
    this.expressionChanged.emit(this.expression)
  }

}
