import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})

export class AdddetailsComponent implements OnInit {
  name:string[]=[];
  surname:string[]=[];
  gender:string[]=[];
  age:number[]=[];
  phoneno:number[]=[];
  passportno:string[]=[];
  selectedseatno:string[]=[];
  flightid:any;
  totalseat:any;
  uid:any;
  date:any;
  class:any;
 details:any=[];
 seatno=[];
  

  constructor(private rout:ActivatedRoute,private route:Router,private _flightservie:FlightserviceService) { 

  }

  ngOnInit(): void {
    this.flightid = this.rout.snapshot.params['flightid'];
    this.totalseat = this.rout.snapshot.params['totalseat'];
    this.date = this.rout.snapshot.params['date'];
    this.class = this.rout.snapshot.params['class'];
    this.uid = this.rout.snapshot.params['uid'];

    this._flightservie.getseatno(this.flightid).subscribe(
      (data:any)=>{
        this.seatno=data;
        console.log(this.seatno);
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }
  
  createRange(ts:number){
    var items: number[] = [];
    for(var i = 1; i <= ts; i++){
      items.push(i);
      this.name.push("");
      this.surname.push("");

      this.age.push();
      this.phoneno.push();
      this.passportno.push("");
      this.selectedseatno.push("");
    }
     return items;
    //console.log("tOTAL SEATS:" + ts)
    //return new Array(ts);
  }
  formSubmit(){
    console.log(this.name);
    console.log(this.surname);

    console.log(this.age);
    console.log(this.phoneno);
    console.log(this.passportno);
    console.log(this.selectedseatno)

    for(let i =0;i<this.totalseat;i++){
      this.details.push({name:this.name[i],surname:this.surname[i],age:this.age[i],passportno:this.passportno[i],phoneno:this.phoneno[i],seatno:this.selectedseatno[i]})
    }
    console.log("printing json");
    console.log(this.details);
    this.route.navigate(['/payment/' + this.flightid + '/' + this.totalseat + '/' + this.uid + '/' + this.date + '/' + this.class + '/' + JSON.stringify(this.details)]);
    
  }

}
