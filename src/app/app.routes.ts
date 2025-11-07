import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AccountPage } from '../pages/account-page/account-page';
import { AccountDetailPage } from '../pages/account-detail-page/account-detail-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { NewsPage } from '../pages/news-page/news-page';
import { AjouterCompteOnglet } from '../components/bank-account/ajouter-compte-onglet/ajouter-compte-onglet';
import { ModifierCompteOnglet } from '../components/bank-account/modifier-compte-onglet/modifier-compte-onglet';
import { DetailsCompteOnglet } from '../components/bank-account/details-compte-onglet/details-compte-onglet';
import { Signals } from '../pages/signals/signals';

export const routes: Routes = [
  { path: "", component: HomePage, title: "Accueil" },

  // Exemple de redirection
  // Peu par exemple être utile si des liens partagés avec des utilisateurs sont changés
  // Pour tester, mettre /test dans l'url
  { path: "test", redirectTo: "comptes-bancaire" },

  {
    path: "comptes-bancaire", component: AccountPage, title: "Comptes bancaire", children: [
      { path: "", redirectTo: "ajouter", pathMatch: "full" }, // Activer pour forcer l'ouverture de l'onglet 'ajouter' si on est sur la page 'comptes-bancaire'
      { path: "ajouter", component: AjouterCompteOnglet },
      { path: "modifier", component: ModifierCompteOnglet },
      { path: "détails", component: DetailsCompteOnglet }
    ]
  },
  { path: "comptes-bancaire/:id", component: AccountDetailPage, title: "Détails du compte" },
  { path: "actualites", component: NewsPage, title: "Nos actualités" },
  { path: "signaux", component: Signals, title: "Les signaux: démo" },

  { path: "**", component: NotFoundPage, title: "404" }
];
