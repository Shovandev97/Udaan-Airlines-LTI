import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }
  public user = {
    name:'',
    mobileno:'',
    email:'',
    password:'',
  }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user)
    
    this.userService.addUser(this.user).subscribe(
    (data)=>{
      console.log(data);
      alert('success');
      this.route.navigate(['/login']);
    },
    (error)=>{
      console.log(error);
      
      alert('User already exists')
    }
    );
  }

}
