import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareAccountsService } from '../../../services/shareAccountsData/share-accounts-service';
import { IAccount } from '../../../interfaces/IAccount';
import { Subscription } from 'rxjs';
import { UpdateAccount } from "../../update-account/update-account";

@Component({
  selector: 'app-modifier-compte-onglet',
  imports: [UpdateAccount],
  templateUrl: './modifier-compte-onglet.html',
  styleUrl: './modifier-compte-onglet.css',
})
export class ModifierCompteOnglet implements OnInit, OnDestroy {
  constructor(private shareService: ShareAccountsService) { }

  account?: IAccount

  subscription: Subscription = new Subscription()

  ngOnInit(): void {
    this.subscription = this.shareService.accountShareByShareService$.subscribe({
      next: (account) => this.account = account
    })
  }

  ngOnDestroy(): void {
    console.log("on destroy !")
    this.subscription.unsubscribe()
  }

}
