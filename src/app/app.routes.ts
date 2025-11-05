import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AccountPage } from '../pages/account-page/account-page';

export const routes: Routes = [
  { path: "", component: HomePage },
  { path: "comptes-bancaire", component: AccountPage }
];
