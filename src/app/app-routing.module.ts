import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginSuccessComponent } from './login-success/login-success.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: 'login-success', component: LoginSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
