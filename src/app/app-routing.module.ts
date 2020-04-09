import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch:'full'},
  { path: 'sign-in', component: SignInComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
