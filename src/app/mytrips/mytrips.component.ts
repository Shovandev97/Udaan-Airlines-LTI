import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {
  details =[];
  uid:any;

  constructor(private _flights:FlightserviceService,private route:ActivatedRoute,private rout:Router) {

   }

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    this._flights.gettrips(this.uid).subscribe(
      (data:any)=>{
        this.details = data;
        console.log(data);

      },
      (error)=>{
        console.log(error);
      }
    )
  }

  formSubmit(bid:any,flightid:any,userid:any,totalcost:any,classs:any,totalseats:any,cardno:any){
    this._flights.canceltrip(bid,flightid,userid,totalcost,classs,totalseats,cardno).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Flight booking cancelled successfully");
        this.rout.navigate(['home/'+this.uid]);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getBoarding(bid:any){
    this.rout.navigate(['boardingpass/'+bid+'/'+this.uid]);
  }
}
