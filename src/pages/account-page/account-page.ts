import { Component, OnInit } from '@angular/core';
import { AccountList } from "../../components/account-list/account-list";
import { AddAccount } from "../../app/add-account/add-account";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account-page',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './account-page.html',
  styleUrl: './account-page.css',
})
export class AccountPage {


}
