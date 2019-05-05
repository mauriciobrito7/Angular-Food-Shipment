import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() class:string;
  @Input() label:string;

  constructor() { }

  ngOnInit() {
  }

}
