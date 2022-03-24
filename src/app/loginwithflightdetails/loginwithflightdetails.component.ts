import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-loginwithflightdetails',
  templateUrl: './loginwithflightdetails.component.html',
  styleUrls: ['./loginwithflightdetails.component.css']
})
export class LoginwithflightdetailsComponent implements OnInit {

  constructor(private userService:UserService,private route:Router,private rout:ActivatedRoute) { }

  public user = {
    email:'',
    password:'',
  }
  uid:any;
  flightid:any;
  totalseats:any;
  departuredate:any;
  class:any;
 

  ngOnInit(): void {
    this.flightid = this.rout.snapshot.params['flightid'];
    this.totalseats = this.rout.snapshot.params['totalseat'];
    this.departuredate = this.rout.snapshot.params['date'];
    this.class = this.rout.snapshot.params['class'];
  
  }

  formSubmit(){
    console.log(this.user)
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log(data);
        this.uid=data;
        this.route.navigate(['/flightbooking/'+ this.flightid + '/' + this.totalseats  + '/' + this.uid + '/' + this.departuredate + '/' + this.class ]);

      },
      (error)=>{
        console.log(error);
        alert("Please check user credentials")
      }
    )
  }

}
