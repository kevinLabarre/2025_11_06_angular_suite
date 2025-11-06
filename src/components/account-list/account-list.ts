import { Component, Input } from '@angular/core';
import { IAccount } from '../../interfaces/IAccount';
import { AccountService } from '../../services/account/account-service';

@Component({
  selector: 'app-account-list',
  imports: [],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css',
})
export class AccountList {
  @Input({ required: true }) accounts!: IAccount[]

  constructor(private service: AccountService) { }

  handleDelete(accountId?: string) {
    if (accountId)
      this.service.deleteOneAccount(accountId).subscribe({
        next: (resp) => {
          this.accounts = this.accounts.filter((account) => account.id !== resp.id)
        }
      })
  }

}
