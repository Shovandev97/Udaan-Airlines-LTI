import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-boardingpassengerdetails',
  templateUrl: './boardingpassengerdetails.component.html',
  styleUrls: ['./boardingpassengerdetails.component.css']
})
export class BoardingpassengerdetailsComponent implements OnInit {
  boardingpassengers = [];
  flightid:any;

  constructor(private route:ActivatedRoute,private flight:FlightserviceService) { }

  ngOnInit(): void {
    this.flightid = this.route.snapshot.params['flightid'];
    this.flight.getboardingpassengerlist(this.flightid).subscribe(
      (data:any)=>{
        this.boardingpassengers=data;
        console.log(this.boardingpassengers);
      },
      (error)=>{
        console.log(error);
      }
    )

  }

}
