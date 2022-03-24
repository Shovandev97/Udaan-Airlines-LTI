import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightserviceService } from '../services/flightservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

   cardnumber:any;
   cardholdername:any;
   expmonth:any;
   expyr:any;
   cvv:any;
   
   flightid:any;
   totalseat:any;
   uid:any;
   date:any;
   class:any;
   flight =[];
   totalbaseprice:any;
  totaltax:any;
  totalairfare:any;
  conveniencefee:any;
  grandtotal:any;
  details:any=[];

  constructor(private rout:ActivatedRoute,private route:Router,private flightservice:FlightserviceService) { }

  ngOnInit(): void {
    this.flightid = this.rout.snapshot.params['flightid'];
    this.totalseat = this.rout.snapshot.params['totalseat'];
    this.date = this.rout.snapshot.params['date'];
    this.class = this.rout.snapshot.params['class'];
    this.uid = this.rout.snapshot.params['uid'];
    this.details=this.rout.snapshot.params['details'];
    console.log("Payment json");
    this.details = JSON.parse(this.details);
    
    
    

    this.flightservice.getFlightbyfid(this.flightid).subscribe(
      (data:any)=>{
        this.flight = data;
        this.totalbaseprice = this.flight[0]['COST'] * this.totalseat;
        this.totaltax = ((this.totalbaseprice * 18)/100);
        this.totalairfare = this.totalbaseprice + this.totaltax;
        this.conveniencefee = 299 * this.totalseat;
        this.grandtotal = this.totalairfare + this.conveniencefee;

        


      },(error)=>{
        console.log(error);
      })

  }

  formSubmit(){
    
    this.flightservice.addBookingDetails(this.flightid,this.uid,this.grandtotal,this.class,this.totalseat,this.cardnumber).subscribe(
      (data:any)=>{
        console.log(data);
        for(let i=0;i<this.totalseat;i++){
          console.log(this.details[i]['seatno']);
          this.flightservice.removeseatno(this.flightid,this.details[i]['name'],this.details[i]['surname'],this.details[i]['age'],this.details[i]['phoneno'],this.details[i]['passportno'],this.details[i]['seatno']).subscribe(
            (data:any)=>{
              this.route.navigate(['/mytrips/' + this.uid]);
            }
          )
        }
        
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
