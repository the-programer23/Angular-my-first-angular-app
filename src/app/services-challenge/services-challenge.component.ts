import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-services-challenge',
  templateUrl: './services-challenge.component.html',
  styleUrls: ['./services-challenge.component.css'],
  providers: [UsersService, CounterService],
})
export class ServicesChallengeComponent {}
