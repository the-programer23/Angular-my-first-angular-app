import { Component } from '@angular/core';

@Component({
  selector: 'app-component-comunication-life-cycle',
  templateUrl: './component-comunication-life-cycle.component.html',
  styleUrls: ['./component-comunication-life-cycle.component.css'],
})
export class ComponentComunicationLifeCycleComponent {
  CcsUsers = [{ type: 'admin', name: 'Naren', id: 2 }];

  onUserData(userData: { name: string; id: number }) {
    this.CcsUsers.push({
      type: 'user',
      name: userData.name,
      id: userData.id,
    });
    console.log(this.CcsUsers);
  }
  onAdminData(adminData: { name: string; id: number }) {
    this.CcsUsers.push({
      type: 'admin',
      name: adminData.name,
      id: adminData.id,
    });
  }

  onChangeFirst() {
    this.CcsUsers[0].id = 1;
  }

  onDestroyFirst() {
    this.CcsUsers.splice(0, 1);
  }
}
