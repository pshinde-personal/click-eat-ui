import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages'
import { AuthService } from './services/auth.service';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRestaurantComponent,
    AppRoutingComponents,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        },
        allowedDomains: ['localhost:4200', 'https://thawing-caverns-75517.herokuapp.com/*'],
      }
    }),
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService, JwtHelperService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
