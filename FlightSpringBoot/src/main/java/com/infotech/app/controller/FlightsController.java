package com.infotech.app.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infotech.service.FlightService;

@RestController
@RequestMapping(value="/flights")
@CrossOrigin("*")
public class FlightsController {
	
	@Autowired
	FlightService flightservice;

	@RequestMapping(value="/flightdetail/{from}/{to}/{departuredate}/{class}/{totalseats}")
	public List flightdetails(@PathVariable("from") String from,@PathVariable("to") String to,@PathVariable("departuredate") String departuredate,@PathVariable("class") String classs,@PathVariable("totalseats")int totalseats) {
		//System.out.print(flightservice.flightdetails(from, to, departuredate, classs,totalseats));
		return flightservice.flightdetails(from, to, departuredate,classs,totalseats);
	}
	
	@RequestMapping(value="/flightdetailid/{flightid}")
	public List getflightdetailbyid(@PathVariable("flightid") int flightid) {
		return flightservice.getflightdetailbyid(flightid);
	}
	
	@RequestMapping(value="/booking/{flightid}/{uid}/{totalcost}/{classs}/{totalseats}/{cardno}")
	public void updatedetails(@PathVariable("flightid") int flightid,@PathVariable("uid")int uid,
			@PathVariable("totalcost") int totalcost,@PathVariable("classs") String classs,
			@PathVariable("totalseats")int totalseats,@PathVariable("cardno") long cardno) throws SQLException, ClassNotFoundException {
		
		System.out.println(cardno);
		
		flightservice.updatedetails(flightid, uid, totalcost, classs, totalseats,cardno);
	}
	
	@RequestMapping(value="/mytrips/{uid}")
	public List gettrips(@PathVariable("uid") int uid) {
		System.out.println("Controller");
		return flightservice.gettrips(uid);
	}
	
	@RequestMapping(value="/canceltrip/{bid}/{flightid}/{userid}/{totalcost}/{classs}/{totalseats}/{cardno}")
	public void canceltrips(@PathVariable("bid") int bid,@PathVariable("flightid") int flightid,@PathVariable("userid") int userid,@PathVariable("totalcost") int totalcost,@PathVariable("classs") String classs,@PathVariable("totalseats") int totalseats,@PathVariable("cardno")long cardno) {
		flightservice.canceltrip(bid, flightid, userid, totalcost, classs, totalseats, cardno);
	}

	@RequestMapping(value="/boardingpass/{bid}")
	public List getboardingpassdetails(@PathVariable("bid")int bid) {
		return flightservice.getboardingpassdetails(bid);
	}
	
	@RequestMapping(value="/seatno/{flightid}")
	public List getflightdetails(@PathVariable("flightid")int flightid) {
		System.out.println("seatno");
		return flightservice.getseatno(flightid);
	}
	
	@RequestMapping(value="/removeseats/{flightid}/{name}/{surname}/{age}/{phoneno}/{passportno}/{seatno}")
	public void removeseats(@PathVariable("flightid") int flightid,@PathVariable("name") String name,@PathVariable("surname") String surname,@PathVariable("age") int age,@PathVariable("phoneno") long phoneno,@PathVariable("passportno") String passportno,
			@PathVariable("seatno") String seatno) {
		System.out.println(seatno);
		System.out.println("we r here");
		flightservice.removeseats(flightid, name, surname, age, phoneno, passportno, seatno);
		
	}
	
	@RequestMapping(value="/getallflightdetails")
	public List getallflightdetails() {
		return flightservice.getallflightdetails();
	}
	
	@RequestMapping(value="/getalluserdetails")
	public List getalluserdetails() {
		return flightservice.getalluserdetails();
	}
	
	@RequestMapping(value="/boardingpassenger/{flightid}")
	public List getboardingpassengerdetails(@PathVariable("flightid")int flightid) {
		System.out.println("here");
		return flightservice.getboardingpassengerdetails(flightid);
	}
	
	@RequestMapping(value="addflight/{departuretime}/{arrivaltime}/{from}/{to}/{totaltime}/{cost}/{economyseats}/{premiumeconomyseats}/{businessclassseats}/{departuredate}")
	public void addflight(@PathVariable("departuretime") String departuretime,@PathVariable("arrivaltime") String arrivaltime,
			@PathVariable("from") String from,@PathVariable("to") String to,
			@PathVariable("totaltime") String totaltime,@PathVariable("cost") int cost,
			@PathVariable("economyseats") int economyseats,@PathVariable("premiumeconomyseats") int premiumeconomyseats,
			@PathVariable("businessclassseats") int businessclassseats,@PathVariable("departuredate") String departuredate
			) {
		flightservice.addflight(departuretime, arrivaltime, from, to, totaltime, cost, economyseats, premiumeconomyseats, businessclassseats, departuredate);
		
	}
}
