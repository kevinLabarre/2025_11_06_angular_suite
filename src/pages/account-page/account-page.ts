import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account-service';
import { IAccount } from '../../interfaces/IAccount';
import { AccountList } from "../../components/account-list/account-list";
import { AddAccount } from "../../app/add-account/add-account";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-account-page',
  imports: [AccountList, AddAccount, FormsModule],
  templateUrl: './account-page.html',
  styleUrl: './account-page.css',
})
export class AccountPage implements OnInit {

  constructor(private service: AccountService) { }

  accountsList: IAccount[] = []

  displayForm: boolean = false

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    this.service.getAllAccounts().subscribe({
      next: (resp) => this.accountsList = resp,
      error: (err) => console.error("erreur de chargement des comptes", err)
    })
  }

  handleAddOneAccount(account: IAccount) {
    console.log("reçu chez le parent: ", account)
    this.displayForm = false
    this.accountsList.push(account)
  }

}
