import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-adminaddflight',
  templateUrl: './adminaddflight.component.html',
  styleUrls: ['./adminaddflight.component.css']
})
export class AdminaddflightComponent implements OnInit {
  from:any;
  to:any;
  departuredate:any;
  departuretime:any;
  arrivaltime:any;
  hrs:any;
  min:any;
  totalfare:any;
  economyseats:any;
  premiumeconomyseats:any;
  businessclassseats:any;

  minDate = new Date();

  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  myControls = new FormControl();
  filteredOption!: Observable<string[]>;

  constructor(private flight:FlightserviceService,private route:Router) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value))
    )
    this.filteredOption = this.myControls.valueChanges.pipe(
      startWith(''),
      map(value=>this._filters(value))
    )
  }

  private _filter(value:string):string[]{
    const filtervalue = value.toLowerCase();
    return this.options.filter(option=>option.toLowerCase().includes(filtervalue));
  }
  
  private _filters(value:string):string[]{
    const filtervalue = value.toLowerCase();
    return this.options.filter(option=>option.toLowerCase().includes(filtervalue));
  }


  options:string[]=['Mumbai','Aurangabad']


  formSubmit(){

    const totaltime = this.hrs + "h" +" "+ this.min + "m";
    var date = new Date(this.departuredate);
    date.setUTCDate(date.getUTCDate() + 1);
    const newdate = date.toISOString().slice(0,10)

    this.flight.addflightdetails(this.departuretime,this.arrivaltime,this.from,this.to,totaltime,this.totalfare,this.economyseats,this.premiumeconomyseats,this.businessclassseats,newdate).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Flight added successfully");
        this.route.navigate(['/adminhome']);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}


