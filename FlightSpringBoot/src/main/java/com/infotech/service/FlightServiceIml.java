package com.infotech.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infotech.dao.FlightDetailsDao;

@Service
public class FlightServiceIml implements FlightService {
	
	@Autowired
	FlightDetailsDao flightDetailsDao;

	@Override
	public List flightdetails(String From, String To, String departuredate, String classs,int totalseats) {
		// TODO Auto-generated method stub
		return flightDetailsDao.flightdetails(From, To, departuredate, classs,totalseats);
	}

	@Override
	public List getflightdetailbyid(int flightid) {
		// TODO Auto-generated method stub
		return flightDetailsDao.getflightdetailbyid(flightid);
	}

	@Override
	public void updatedetails(int flightid, int uid, int totalcost, String classs,int totalseats,long cardno) throws SQLException, ClassNotFoundException {
		// TODO Auto-generated method stub
		System.out.println("SERVICE");
		 flightDetailsDao.updatedetails(flightid, uid, totalcost, classs,totalseats,cardno);
	}

	@Override
	public List gettrips(int uid) {
		// TODO Auto-generated method stub
		System.out.println("Service");
		return flightDetailsDao.gettrips(uid);
	}

	@Override
	public void canceltrip(int bid, int flightid, int userid, int totalcost, String classs, int totalseats,
			long cardno) {
		// TODO Auto-generated method stub
		flightDetailsDao.canceltrip(bid, flightid, userid, totalcost, classs, totalseats, cardno);
		
	}

	@Override
	public List getboardingpassdetails(int bid) {
		// TODO Auto-generated method stub
		return flightDetailsDao.getboardingpassdetails(bid);
	}

	@Override
	public List getseatno(int flightid) {
		// TODO Auto-generated method stub
		System.out.println("service");
		return flightDetailsDao.getseatno(flightid);
	}


	public void removeseats(int flightid, String name, String surname, int age, long phoneno, String passportno,
			String seatno) {
		 flightDetailsDao.removeseats(flightid, name, surname, age, phoneno, passportno, seatno);
	}

	@Override
	public List getallflightdetails() {
		// TODO Auto-generated method stub
		return flightDetailsDao.getallflightdetails();
	}
	
	@Override
	public List getalluserdetails() {
		// TODO Auto-generated method stub
		return flightDetailsDao.getalluserdetails();
	}
	
	@Override
	public List getboardingpassengerdetails(int flightid) {
		// TODO Auto-generated method stub
		return flightDetailsDao.getboardingpassengerdetails(flightid);
	}

	@Override
	public void addflight(String departuretime, String arrivaltime, String from, String to, String totaltime, int cost,
			int economyseats, int premiumeconomyseats, int businessclassseats,String departuredate) {
		// TODO Auto-generated method stub
		flightDetailsDao.addflight(departuretime, arrivaltime, from, to, totaltime, cost, economyseats, premiumeconomyseats, businessclassseats, departuredate);
		
	}

}
