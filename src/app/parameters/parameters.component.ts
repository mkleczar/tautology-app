import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor() { }

  PARAMETERS = [
    {name: "p", value: true},
    {name: "q", value: true},
    {name: "r", value: false},
  ];

  ngOnInit(): void {
  }

}
