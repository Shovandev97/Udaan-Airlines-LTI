import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlightsComponent } from './flights/flights.component';
import { MatCardModule} from '@angular/material/card';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PaymentComponent } from './payment/payment.component';
import { HomewithoutuidComponent } from './homewithoutuid/homewithoutuid.component';
import { FlightswithoutuidComponent } from './flightswithoutuid/flightswithoutuid.component';
import { LoginwithflightdetailsComponent } from './loginwithflightdetails/loginwithflightdetails.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { BoardingpassComponent } from './boardingpass/boardingpass.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminuserdetailsComponent } from './adminuserdetails/adminuserdetails.component';
import { BoardingpassengerdetailsComponent } from './boardingpassengerdetails/boardingpassengerdetails.component';
import { AdminaddflightComponent } from './adminaddflight/adminaddflight.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutuswithuidComponent } from './aboutuswithuid/aboutuswithuid.component'



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FlightsComponent,
    FlightbookingComponent,
    MytripsComponent,
    PaymentComponent,
    HomewithoutuidComponent,
    FlightswithoutuidComponent,
    LoginwithflightdetailsComponent,
    AdddetailsComponent,
    BoardingpassComponent,
    AdminhomeComponent,
    AdminloginComponent,
    AdminuserdetailsComponent,
    BoardingpassengerdetailsComponent,
    AdminaddflightComponent,
    AboutusComponent,
    AboutuswithuidComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
