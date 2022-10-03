import { Injectable } from '@angular/core';
import {ParsedExpression} from "../model/parsedExpression.model";
import {Parameter} from "../model/parameter.model";
import {ExpressionValidation} from "../model/expressionValidation.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TautologyChecking} from "../model/tautologyChecking.model";

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  url:string = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  parse(expression: string): Observable<ParsedExpression> {
    return this.httpClient.post<ParsedExpression>(this.url + "parameters", {expression: expression})
  }

  validate(expression: string, parameters: Parameter[]): Observable<ExpressionValidation> {
    return this.httpClient.post<ExpressionValidation>(this.url + "validate", {expression: expression, parameters: parameters})
  }

  isTautology(expression: string):Observable<TautologyChecking> {
    return this.httpClient.post<TautologyChecking>(this.url + "tautology", {expression: expression})
  }
}
