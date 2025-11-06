import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccount } from '../../interfaces/IAccount';
import { AccountService } from '../../services/account/account-service';

@Component({
  selector: 'app-account-detail-page',
  imports: [],
  templateUrl: './account-detail-page.html',
  styleUrl: './account-detail-page.css',
})
export class AccountDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AccountService
  ) {
    this.activatedRoute.params.subscribe(params => this.id = params['id'])
  }
  ngOnInit(): void {
    this.loadAccount()
  }

  id: string = ""
  account?: IAccount

  loadAccount(): void {
    if (this.id !== "")
      this.service.getAccountById(this.id).subscribe({
        next: resp => this.account = resp,
        error: err => console.error("erreur de chargement du compte", err)
      })
  }

}
