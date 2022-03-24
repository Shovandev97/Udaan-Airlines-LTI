import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutuswithuidComponent } from './aboutuswithuid/aboutuswithuid.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { AdminaddflightComponent } from './adminaddflight/adminaddflight.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminuserdetailsComponent } from './adminuserdetails/adminuserdetails.component';
import { BoardingpassComponent } from './boardingpass/boardingpass.component';
import { BoardingpassengerdetailsComponent } from './boardingpassengerdetails/boardingpassengerdetails.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightswithoutuidComponent } from './flightswithoutuid/flightswithoutuid.component';
import { HomeComponent } from './home/home.component';
import { HomewithoutuidComponent } from './homewithoutuid/homewithoutuid.component';
import { LoginComponent } from './login/login.component';
import { LoginwithflightdetailsComponent } from './loginwithflightdetails/loginwithflightdetails.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
      path:'login',
      component: LoginComponent,
      pathMatch: 'full',
    },
    {
      path:'register',
      component: RegisterComponent,
      pathMatch: 'full',
    },
    {
      path:'home/:uid',
      component:HomeComponent,
      pathMatch:'full',
    },
    {
      path:'flights/:from/:to/:departuredate/:class/:totalseats/:uid',
      component:FlightsComponent,
      pathMatch:'full',
    },
    {
      path:'flightbooking/:flightid/:totalseat/:uid/:date/:class',
      component:FlightbookingComponent,
      pathMatch:'full',
    },
    {
      path:'mytrips/:uid',
      component:MytripsComponent,
      pathMatch:'full'
    },
    {
      path:'adddetails/:flightid/:totalseat/:uid/:date/:class',
      component:AdddetailsComponent,
      pathMatch:'full'
    },
    {
      path:'payment/:flightid/:totalseat/:uid/:date/:class/:details',
      component:PaymentComponent,
      pathMatch:'full'
    },
    {
      path:'home',
      component:HomewithoutuidComponent,
      pathMatch:'full'
    },
    {
      path:'flights/:from/:to/:departuredate/:class/:totalseats',
      component:FlightswithoutuidComponent,
      pathMatch:'full'
    },
    {
      path:'login/:flightid/:totalseat/:date/:class',
      component:LoginwithflightdetailsComponent,
      pathMatch:'full'
    },
    {
      path:'boardingpass/:bid/:uid',
      component: BoardingpassComponent,
      pathMatch:'full'
    },
    {
      path: 'adminhome',
      component: AdminhomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'adminlogin',
      component: AdminloginComponent,
      pathMatch: 'full'
    },
    {
      path: 'adminuserdetails',
      component: AdminuserdetailsComponent,
      pathMatch: 'full'
    },
    {
      path: 'boardingpassengerdetails/:flightid',
      component: BoardingpassengerdetailsComponent,
      pathMatch: 'full'
    },
    {
      path: 'addflight',
      component: AdminaddflightComponent,
      pathMatch: 'full'
    },
    {
      path: 'aboutus',
      component: AboutusComponent,
      pathMatch: 'full'
    },
    {
      path: 'aboutus/:uid',
      component: AboutuswithuidComponent,
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
