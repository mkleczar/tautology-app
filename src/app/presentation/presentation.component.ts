import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  @Input() expression: string = ""
  @Input() isTautology: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
