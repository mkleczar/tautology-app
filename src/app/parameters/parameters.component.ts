import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Parameter} from "../model/parameter.model";

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  @Input() parameters: Parameter[] | undefined

  @Output() validationChanged: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onValidationChanged() {
    this.validationChanged.emit("test")
  }


}
