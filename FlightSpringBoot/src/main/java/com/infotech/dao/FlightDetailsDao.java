package com.infotech.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

public interface FlightDetailsDao {
	public List flightdetails(String From,String To,String departuredate,String classs,int totalseats);
	
	public List getflightdetailbyid(int flightid) ;
	
	void updatedetails(int flightid,int uid,int totalcost,String classs,int totalseats,long cardno) throws SQLException, ClassNotFoundException;

	public List gettrips(int uid);
	
	void canceltrip(int bid,int flightid,int userid,int totalcost,String classs,int totalseats,long cardno);
	
	public List getboardingpassdetails(int bid);

	List getseatno(int flightid);


	void removeseats(int flightid, String name, String surname, int age, long phoneno, String passportno,
			String seatno);

	List getallflightdetails();

	List getalluserdetails();

	List getboardingpassengerdetails(int flightid);

	void addflight(String departuretime,String arrivaltime,String from,String to,String totaltime,int cost,int economyseats,int premiumeconomyseats,int businessclassseats,String departuredate);

}
