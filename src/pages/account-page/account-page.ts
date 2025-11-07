import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountList } from "../../components/account-list/account-list";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AccountService } from '../../services/account/account-service';
import { IAccount } from '../../interfaces/IAccount';
import { ShareAccountsService } from '../../services/shareAccountsData/share-accounts-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-page',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AccountList
  ],
  templateUrl: './account-page.html',
  styleUrl: './account-page.css',
})
export class AccountPage implements OnInit, OnDestroy {

  constructor(private service: AccountService, private shareService: ShareAccountsService) { }

  accounts?: IAccount[]
  subscription?: Subscription

  ngOnInit(): void {
    this.loadAccountsList();
    this.accountsListSubscription();
  }

  loadAccountsList(): void {
    this.service.getAllAccounts().subscribe({
      next: resp => {
        this.shareService.shareAccountList(resp)
      },
      error: err => console.error("erreur de chargement des comptes", err)
    })
  }

  accountsListSubscription() {
    this.subscription = this.shareService.accountListShareByShareService$.subscribe(resp => this.accounts = resp)
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe()
  }

}
