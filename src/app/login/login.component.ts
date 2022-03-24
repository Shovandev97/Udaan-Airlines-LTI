import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }

  public user = {
    email:'',
    password:'',
  }
  uid:any;

  ngOnInit(): void {
  
  }

  formSubmit(){
    console.log(this.user)
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log(data);
        this.uid=data;
        this.route.navigate(['/home/'+this.uid])
      },
      (error)=>{
        console.log(error);
        alert("Please check user credentials")
      }
    )
  }

}
