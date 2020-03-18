import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {RegisterComponent } from './register/register.component';
import {LoginComponent } from './login/login.component';
import {EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},

  {path:'login', component:LoginComponent},
  {path:'events', component:EventsComponent},
  {path:'special', component:SpecialComponent,
     canActivate: [AuthGuard]},



  {path:'', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
