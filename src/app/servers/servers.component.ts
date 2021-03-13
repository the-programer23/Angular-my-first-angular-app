import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No hay un servidor creado todavía';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['testServer1', 'testServer 2'];
  secretPassword = 'Secret password = Tuna';
  showSecretPassword = false;
  showNum = false;
  showDate = false;
  log = [];
  dates = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'El servidor ' + this.serverName + ' fue creado';
  }

  toogleDate() {
    this.showDate = !this.showDate;
    this.dates.push(new Date());
  }
  toogleDetails() {
    this.showSecretPassword = !this.showSecretPassword;
    this.log.push(this.log.length + 1);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
