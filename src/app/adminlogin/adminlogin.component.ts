import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public user = {
    email:'',
    password:'',
  }

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }


  formSubmit(){
    console.log(this.user)
    this.userService.adminlogin(this.user).subscribe(
      (data)=>{
        console.log(data);
        
        this.route.navigate(['/adminhome'])
      },
      (error)=>{
        console.log(error);
        alert("Please check user credentials")
      }
    )
  }

}
