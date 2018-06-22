import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="toast"><h3>Watch out!</h3></div>
  `,
  styles:[`
    .toast {
      background-color: yellow;
      width: 50%;
      text-align: center;
    }
  `]
})

export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
