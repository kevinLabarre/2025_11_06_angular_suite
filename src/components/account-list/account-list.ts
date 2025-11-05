import { Component, Input } from '@angular/core';
import { IAccount } from '../../interfaces/IAccount';

@Component({
  selector: 'app-account-list',
  imports: [],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css',
})
export class AccountList {
  @Input({ required: true }) accounts!: IAccount[]
}
