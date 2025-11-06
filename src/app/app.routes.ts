import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AccountPage } from '../pages/account-page/account-page';
import { AccountDetailPage } from '../pages/account-detail-page/account-detail-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { NewsPage } from '../pages/news-page/news-page';

export const routes: Routes = [
  { path: "", component: HomePage, title: "Accueil" },
  { path: "comptes-bancaire", component: AccountPage, title: "Comptes bancaire" },
  { path: "comptes-bancaire/:id", component: AccountDetailPage, title: "Détails du compte" },
  { path: "actualites", component: NewsPage, title: "Nos actualités" },

  { path: "**", component: NotFoundPage, title: "404" }
];
