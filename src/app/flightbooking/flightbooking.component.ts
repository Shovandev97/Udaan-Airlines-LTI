import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-flightbooking',
  templateUrl: './flightbooking.component.html',
  styleUrls: ['./flightbooking.component.css']
})
export class FlightbookingComponent implements OnInit {
  flight =[];
  flightid:any;
  totalseats:any;
  uid:any;
  date:any;
  totalbaseprice:any;
  totaltax:any;
  totalairfare:any;
  conveniencefee:any;
  grandtotal:any;
  class:any;

  constructor(private route:ActivatedRoute,private _flights:FlightserviceService,private rout:Router) { }

  ngOnInit(): void {
    
    this.flightid = this.route.snapshot.params['flightid'];
    this.totalseats = this.route.snapshot.params['totalseat'];
    this.uid = this.route.snapshot.params['uid'];
    this.date = this.route.snapshot.params['date'];
    this.class=this.route.snapshot.params['class']
    console.log(this.flightid)
    this._flights.getFlightbyfid(this.flightid).subscribe(
      (data:any)=>{
        this.flight = data;
        this.totalbaseprice = this.flight[0]['COST'] * this.totalseats;
        this.totaltax = ((this.totalbaseprice * 18)/100);
        this.totalairfare = this.totalbaseprice + this.totaltax;
        this.conveniencefee = 299 * this.totalseats;
        this.grandtotal = this.totalairfare + this.conveniencefee;

        


      },(error)=>{
        console.log(error);
      })
  }

  formSubmit(){
    this.rout.navigate(['/adddetails/' + this.flightid + '/' + this.totalseats + '/' + this.uid + '/' + this.date + '/' + this.class]);

  }

}
