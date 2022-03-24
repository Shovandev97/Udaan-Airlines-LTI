import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-adminuserdetails',
  templateUrl: './adminuserdetails.component.html',
  styleUrls: ['./adminuserdetails.component.css']
})
export class AdminuserdetailsComponent implements OnInit {
  userdetails=[];
  constructor(private flight:FlightserviceService) { }

  ngOnInit(): void {
    this.flight.getalluserdetails().subscribe(
      (data:any)=>{
        this.userdetails=data;
        console.log(data);
      },
      (error)=>{
        console.log(error)
      }

    )
  }

}
