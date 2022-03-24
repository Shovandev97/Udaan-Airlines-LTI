import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  constructor(private _http:HttpClient) { 
    
  }

  public getFlights(from: any,to: any,departuredate: any,classs: any,totalseats:any){
    
    return this._http.get(`${baseUrl}/flights/flightdetail/${from}/${to}/${departuredate}/${classs}/${totalseats}`);
  }

  public getFlightbyfid(flightid:any){
    
    return this._http.get(`${baseUrl}/flights/flightdetailid/${flightid}`);

  }

  public addBookingDetails(flightid:any,uid:any,totalcost:any,classs:any,totalseats:any,cardno:any){
    console.log(cardno);
    return this._http.get(`${baseUrl}/flights/booking/${flightid}/${uid}/${Math.round(totalcost)}/${classs}/${totalseats}/${cardno}`);
  }

  public gettrips(uid:any){
    return this._http.get(`${baseUrl}/flights/mytrips/${uid}`);
  }

  public canceltrip(bid:any,flightid:any,userid:any,totalcost:any,classs:any,totalseats:any,cardno:any){
    return this._http.get(`${baseUrl}/flights/canceltrip/${bid}/${flightid}/${userid}/${totalcost}/${classs}/${totalseats}/${cardno}`);
  }

  public getboardingdetails(bid:any){
    return this._http.get(`${baseUrl}/flights/boardingpass/${bid}`)
  }

  public getseatno(flightid:any){
    return this._http.get(`${baseUrl}/flights/seatno/${flightid}`)
  }

  public removeseatno(flightid:any,name:any,surname:any,age:any,phoneno:any,passportno:any,seatno:any){
    return this._http.get(`${baseUrl}/flights/removeseats/${flightid}/${name}/${surname}/${age}/${phoneno}/${passportno}/${seatno}`)
  }

  public getallflightdetails(){
    return this._http.get( `${baseUrl}/flights/getallflightdetails`)
  }

  public getalluserdetails(){
    return this._http.get( `${baseUrl}/flights/getalluserdetails`)
  }

  public getboardingpassengerlist(flightid:any){
    return this._http.get(`${baseUrl}/flights/boardingpassenger/${flightid}`)
  }

  public addflightdetails(departuretime:any,arrivaltime:any,from:any,to:any,totaltime:any,cost:any,economyseats:any,premiumeconomyseats:any,businessclassseats:any,departuredate:any){
    return this._http.get(`${baseUrl}/flights/addflight/${departuretime}/${arrivaltime}/${from}/${to}/${totaltime}/${cost}/${economyseats}/${premiumeconomyseats}/${businessclassseats}/${departuredate}`)
  }
}
