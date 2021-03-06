import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../login.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoginService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loginService: LoginService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loginService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
