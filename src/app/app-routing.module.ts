import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthComponent } from './auth/auth.component';
import { ByDownloadsComponent } from './by-downloads/by-downloads.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { LoginComponent } from './login/login.component';
import { PopularComponent } from './popular/popular.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'by-downloads', component: ByDownloadsComponent },
  { path: 'comming-soon', component: CommingSoonComponent },
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
