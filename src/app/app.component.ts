import { Component } from '@angular/core';
import {Parameter} from "./model/parameter.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tautology-app';

  expression: string = "p|q<=>~(~p&~q)";

  parameters: Parameter[] = [
    {name: "p", value: true},
    {name: "q", value: false},
    {name: "r", value: true},
  ];
}
