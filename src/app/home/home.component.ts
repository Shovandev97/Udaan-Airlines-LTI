import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private rout:ActivatedRoute) { }
  public bookingdetails={
    from:'',
    to:'',
    departuredate:'',
    class:'',
    adult:'',
    children:''
  }
  uid:any;

  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  myControls = new FormControl();
  filteredOption!: Observable<string[]>;


  
  minDate = new Date();
  ngOnInit(): void {
    this.uid = this.rout.snapshot.params['uid']
    console.log(this.uid)
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
    console.log(this.bookingdetails)
    var date = new Date(this.bookingdetails.departuredate);
    date.setUTCDate(date.getUTCDate() + 1);
    const newdate = date.toISOString().slice(0,10)
    this.bookingdetails.adult =  this.bookingdetails.adult + this.bookingdetails.children;
    
    this.route.navigate(['/flights/'+this.bookingdetails.from+'/'+this.bookingdetails.to+'/'+newdate+'/'+this.bookingdetails.class+'/'+this.bookingdetails.adult+'/'+this.uid])
  }

}
