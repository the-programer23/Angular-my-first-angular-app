import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverStatus = 'fuera de linea';
  id = 2;
  name = 'CCS 2 NIVEL 2';

  constructor() {
    console.log('server component constructor');
    this.serverStatus = Math.random() > 0.5 ? 'en linea' : 'fuera de linea';
  }

  getName() {
    return this.name;
  }
  getColor() {
    return this.serverStatus === 'en linea' ? 'green' : 'red';
  }
}
