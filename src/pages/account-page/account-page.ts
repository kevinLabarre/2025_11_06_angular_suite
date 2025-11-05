import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account-service';
import { IAccount } from '../../interfaces/IAccount';
import { AccountList } from "../../components/account-list/account-list";

@Component({
  selector: 'app-account-page',
  imports: [AccountList],
  templateUrl: './account-page.html',
  styleUrl: './account-page.css',
})
export class AccountPage implements OnInit {

  constructor(private service: AccountService) { }

  accountsList: IAccount[] = []

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    this.service.getAllAccounts().subscribe({
      next: (resp) => this.accountsList = resp,
      error: (err) => console.error("erreur de chargement des comptes", err)
    })
  }



}
