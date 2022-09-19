import { Injectable } from '@angular/core';
import {ParsedExpression} from "../model/parsedExpression.model";
import {Parameter} from "../model/parameter.model";
import {ExpressionValidation} from "../model/expressionValidation.model";

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() { }

  parse(expression: string): ParsedExpression {
    // TODO: make it real http service
    return {expression: "p<=>q", parameters: ["p", "q"]}
  }

  validate(expression: string, parameters: Parameter[]): ExpressionValidation {
    // TODO: make it real http service
    return {
      expression: "p<=>q",
      parametersValidation: [
        {name:"p", value: true},
        {name:"q", value: true},
        {name:"r", value: true}
      ],
      validationResult: false};
  }
}
