import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantDetailOverviewComponent } from './components/restaurant-details/restaurant-detail-overview/restaurant-detail-overview.component';
import { RestaurantDetailOrderComponent } from './components/restaurant-details/restaurant-detail-order/restaurant-detail-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRestaurantComponent,
    AppRoutingComponents,
    WildcardComponent,
    RestaurantDetailsComponent,
    RestaurantDetailOverviewComponent, 
    RestaurantDetailOrderComponent
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
        disallowedRoutes: ['localhost:4200/login', 'https://thawing-caverns-75517.herokuapp.com/api/v1/auth/login']
      }
    }),
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService, JwtHelperService, AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
