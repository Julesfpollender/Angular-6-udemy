import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  isCreated = false;
  servers = ['serv1', 'serv2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){ 
    this.isCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){ 
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
