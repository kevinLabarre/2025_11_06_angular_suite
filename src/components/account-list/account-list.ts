import { Component, Input } from '@angular/core';
import { IAccount } from '../../interfaces/IAccount';
import { AccountService } from '../../services/account/account-service';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-account-list',
  imports: [RouterLink],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css',
})
export class AccountList {
  @Input({ required: true }) accounts!: IAccount[]

  constructor(private service: AccountService, private router: Router) { }

  handleDelete(accountId?: string): void {
    if (accountId)
      this.service.deleteOneAccount(accountId).subscribe({
        next: (resp) => {
          this.accounts = this.accounts.filter((account) => account.id !== resp.id)
        }
      })
  }

  handleRedirectDetails(id?: string): void {
    if (id)
      this.router.navigate(['/comptes-bancaire', id])
  }

}
