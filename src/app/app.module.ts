import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviagtionComponent } from './naviagtion/naviagtion.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import {AuthService } from './auth.service';
import {EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService } from './token-interceptor.service';


import {Ng2PaginationModule} from 'ng2-pagination';



@NgModule({
  declarations: [
    AppComponent,
    NaviagtionComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2PaginationModule,

    AppRoutingModule
  ],
  providers: [AuthService, EventService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true 
  }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
