import { Component } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
})
export class CreateServerComponent {
  servers = [];

  onCreateServer() {
    this.servers.push('Otro servidor');
  }
  onRemoveServer(id: number) {
    console.log(id);
    let position = id + 1;
    this.servers.splice(position, 1);
  }
}
