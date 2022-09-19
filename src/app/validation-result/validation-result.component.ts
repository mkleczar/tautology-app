import {Component, Input, OnInit} from '@angular/core';
import {Parameter} from "../model/parameter.model";

@Component({
  selector: 'app-validation-result',
  templateUrl: './validation-result.component.html',
  styleUrls: ['./validation-result.component.css']
})
export class ValidationResultComponent implements OnInit {


  @Input() expression: string | undefined
  @Input() parameters: Parameter[] | undefined
  @Input() validation: boolean | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
