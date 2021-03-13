import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponentObservables implements OnInit, OnDestroy {
  id: number;
  private activatedSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activatedSub = this.route.params.subscribe((params: Params) => {
      this.id = +params.identifier;
    });
  }

  onActivate() {
    this.userService.activatedEmitter.next(true);
  }
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
