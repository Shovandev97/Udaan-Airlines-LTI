import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  from: any;
  to:any;
  departuredate:any;
  class:any;
  totalseats:any;
  flights = [];
  uid:any;
  


  constructor(private route:ActivatedRoute,private _flights:FlightserviceService) { }

  ngOnInit(): void {
    this.from = this.route.snapshot.params['from'];
    this.to = this.route.snapshot.params['to'];
    this.departuredate = this.route.snapshot.params['departuredate'];
    this.class = this.route.snapshot.params['class'];
    this.totalseats = this.route.snapshot.params['totalseats'];
    this.uid = this.route.snapshot.params['uid'];
    
    this._flights.getFlights(this.from,this.to,this.departuredate,this.class,this.totalseats).subscribe((
      data:any)=>{
        console.log(data)
        this.flights = data;
        
      },(error)=>{
        console.log(error);
      }
    )



  }

}
