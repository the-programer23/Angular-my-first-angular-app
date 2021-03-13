import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  id = 1;
  name = 'CCS nivel 1';
  showRoutes = false;

  onToggleRoutes() {
    this.showRoutes = !this.showRoutes;
  }
}
