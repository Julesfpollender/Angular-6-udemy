import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="toast"><h3>Well done!</h3></div>
  `,
  styles:[`
    .toast {
      background-color: green;
      width: 50%;
      text-align: center;
    }
  `]
})

export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}