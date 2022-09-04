import {Component, Input, OnInit} from '@angular/core';
import {Parameter} from "../model/parameter.model";

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  @Input() parameters: Parameter[] | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
