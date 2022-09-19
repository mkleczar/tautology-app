export class ParsedExpression {
  expression: string
  parameters: string[]

  constructor(expression: string, parameters: string[]) {
    this.expression = expression
    this.parameters = parameters
  }
}
