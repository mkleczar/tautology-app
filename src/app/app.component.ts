import { Component } from '@angular/core';
import {Parameter} from "./model/parameter.model";
import {ParserService} from "./services/parser.service";
import {ParsedExpression} from "./model/parsedExpression.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tautology-app';

  constructor(private parserService: ParserService) {
  }


  expression: string = "";
  parsedExpression: string = "";
  parsedExpressionPresentation: string = "";
  validation: boolean | undefined

  parameters: Parameter[] = [];
  parametersPresentation: Parameter[] = [];

  isTautology: boolean = false

  onExpressionChanged(exp: string) {
    this.expression = exp
    this.parserService.parse(exp).subscribe(
      response => {
        // console.log(response)
        this.parsedExpression = response.expression
        this.parameters = response.parameters
          .map(param => {return {name: param, value: true}})
          .concat()
      })
  }

  onValidationChanged() {
    this.parserService.validate(this.expression, this.parameters).subscribe(
      response => {
        // console.log(response)
        this.parsedExpressionPresentation = this.parsedExpression
        this.parametersPresentation = AppComponent.cloneArray(this.parameters)
        this.validation = response.value
      })
  }

  private static cloneArray(params: Parameter[]):Parameter[] {
    return params
      .map(param => {return {name: param.name, value: param.value}})
      .concat()
  }
}
