import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-boardingpass',
  templateUrl: './boardingpass.component.html',
  styleUrls: ['./boardingpass.component.css']
})
export class BoardingpassComponent implements OnInit {

  details =[];
  bid:any;
  uid:any;

  constructor(private _flights:FlightserviceService,private route:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.bid = this.route.snapshot.params['bid'];
    this.uid = this.route.snapshot.params['uid'];
    this._flights.getboardingdetails(this.bid).subscribe(
      (data:any)=>{
        this.details = data;
        console.log(data);
        console.log(this.details.length);

      },
      (error)=>{
        console.log(error);
      }
    )
  }

  formSubmit(){
    window.print();
  }




}
