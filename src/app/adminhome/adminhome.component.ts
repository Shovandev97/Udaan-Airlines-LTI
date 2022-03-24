import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  flightdetails =[];

  constructor(private flight:FlightserviceService,private route:Router) { }

  ngOnInit(): void {
    this.flight.getallflightdetails().subscribe(
      (data:any)=>{
        this.flightdetails = data;
        console.log(this.flightdetails);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  formSubmit(flightid:any){
    this.route.navigate(['/boardingpassengerdetails/' + flightid])
  }

}
