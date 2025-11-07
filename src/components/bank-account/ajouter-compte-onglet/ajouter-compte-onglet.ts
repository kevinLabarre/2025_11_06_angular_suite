import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account/account-service';
import { IAccount } from '../../../interfaces/IAccount';
import { AccountList } from "../../account-list/account-list";
import { AddAccount } from "../../add-account/add-account";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-compte-onglet',
  imports: [AccountList, AddAccount, FormsModule],
  templateUrl: './ajouter-compte-onglet.html',
  styleUrl: './ajouter-compte-onglet.css',
})
export class AjouterCompteOnglet implements OnInit {
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
