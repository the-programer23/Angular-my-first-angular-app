import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoginService],
})
export class NewAccountComponent {
  constructor(
    private loginService: LoginService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert('the new status is ' + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loginService.logStatusChange(accountStatus);
  }
}
