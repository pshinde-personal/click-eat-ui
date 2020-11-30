import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './components/restaurant-list/restaurant/restaurant.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { RestaurantDetailOverviewComponent } from './components/restaurant-details/restaurant-detail-overview/restaurant-detail-overview.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantDetailOrderComponent } from './components/restaurant-details/restaurant-detail-order/restaurant-detail-order.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'restaurants/:id', component: RestaurantDetailsComponent, 
    children: [
      {
        path: 'overview', component: RestaurantDetailOverviewComponent
      },
      {
        path: 'order', component: RestaurantDetailOrderComponent
      }
    ]
  },
  {
    path: 'restaurants', component: RestaurantListComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard]
  },

  {
    path: '**', component: WildcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponents = [
  LoginComponent, ProfileComponent, HomeComponent, RegisterComponent, 
  RestaurantComponent, RestaurantListComponent, DashboardComponent, AddRestaurantComponent, RestaurantDetailOverviewComponent, RestaurantDetailOrderComponent
]