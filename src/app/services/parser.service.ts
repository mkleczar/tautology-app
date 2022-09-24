import { Injectable } from '@angular/core';
import {ParsedExpression} from "../model/parsedExpression.model";
import {Parameter} from "../model/parameter.model";
import {ExpressionValidation} from "../model/expressionValidation.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() { }

  parse(expression: string): Observable<ParsedExpression> {
    // TODO: make it real http service
    return new Observable(observer => {
      observer.next({expression: "p<=>q", parameters: ["p", "q"]})
    })
  }

  validate(expression: string, parameters: Parameter[]): Observable<ExpressionValidation> {
    // TODO: make it real http service
    return new Observable(observer => {
      observer.next( {
          expression: "p<=>q",
          parametersValidation: [
            {name: "p", value: true},
            {name: "q", value: true},
            {name: "r", value: true}
          ],
          validationResult: false
        })
    })
  }
}
