import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ModelesComponent } from './modeles/modeles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'modèles', component: ModelesComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'inscription', component: SignUpComponent },
  { path: 'connexion', component: SignInComponent },
  { path: 'dashboard-user', component: UserDashboardComponent },
  { path: 'settings-user', component: UserSettingsComponent },
  { path: '**', component: NotFoundComponent }
];

