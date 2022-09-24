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


  expression: string = "p|q<=>~(~p&~q)";
  validation: boolean | undefined

  parameters: Parameter[] = [
    {name: "r", value: true}
  ];

  onExpressionChanged(exp: string) {
    this.parserService.parse(exp).subscribe(
      response => {
        console.log(response)
        this.expression = response.expression
        this.parameters = [
          {name: "p", value: true}
        ]
      })
  }

  onValidationChanged() {
    this.parserService.validate(this.expression, this.parameters).subscribe(
      response => {
        console.log(response)
        this.validation = response.validationResult;
      })
  }
}
