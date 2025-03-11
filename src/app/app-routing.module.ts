import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,},// parent component 

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent}
  ]},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})   
export class AppRoutingModule { }
