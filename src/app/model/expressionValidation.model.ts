import {Parameter} from "./parameter.model";

export class ExpressionValidation {
  expression: string
  parametersValidation: Parameter[]
  validationResult: boolean

  constructor(expression: string, parametersValidation: Parameter[], validationResult: boolean) {
    this.expression = expression
    this.parametersValidation = parametersValidation
    this.validationResult = validationResult
  }
}
