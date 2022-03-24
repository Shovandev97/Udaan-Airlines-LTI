package com.infotech.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.infotech.model.GetBid;
import com.infotech.model.GetFlightid;

@Component
public class FlightDetailsDaoImpl implements FlightDetailsDao{
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public List flightdetails(String From, String To, String departuredate, String classs,int totalseats) {
		// TODO Auto-generated method stub
		String sql = "select * from flightdetails where fromm = ? and too = ? and departuredate = ? and economy>?";
		String sqlpe = "select * from flightdetails where fromm = ? and too = ? and departuredate = ? and PREMIUMECONOMY>?";
		String sqlb = "select * from flightdetails where fromm = ? and too = ? and departuredate = ? and BUSSINESS>?";
		
		System.out.println(From);
		System.out.println(To);
		System.out.println(departuredate);
		System.out.println(totalseats);
		List l = null ;
		if(classs.equals("Economy")) {
			l= jdbcTemplate.queryForList(sql,new Object[] {
					From,To,departuredate,totalseats
			});
		}
		else if(classs.equals("Business Class")) {
			l= jdbcTemplate.queryForList(sqlb,new Object[] {
					From,To,departuredate,totalseats
			});
		}
		else if(classs.equals("Premium Economy")) {
			l= jdbcTemplate.queryForList(sqlpe,new Object[] {
					From,To,departuredate,totalseats
			});
		}
		
		
		System.out.print(l);
		return l;
	}

	@Override
	public List getflightdetailbyid(int flightid) {
		// TODO Auto-generated method stub
		String sql = "SELECT  * FROM flightdetails where fightid = ?";
		List l= jdbcTemplate.queryForList(sql,flightid);
		//System.out.println(l);
		return l;
	}

	@Override
	public void updatedetails(int fightid, int uid, int totalcost, String classs,int totalseats,long cardno) throws SQLException, ClassNotFoundException {
		// TODO Auto-generated method stub
		String sql ="INSERT INTO bookingdetails VALUES (bookingid_sequence.NEXTVAL,?,?,?,?,?,?)";
		jdbcTemplate.update(sql,new Object[] {
			fightid,uid,totalcost,classs,totalseats,cardno
		});
		
		if(classs.equals("Economy")) {
			System.out.println(fightid);
			String sqle = "update flightdetails set economy = economy - ? where fightid = ?"   ;
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@//localhost:1521/XE","system","system");
			PreparedStatement ps = con.prepareStatement(sqle);
			ps.setInt(1, totalseats);
			ps.setString(2, Integer.toString(fightid));
			
			ps.executeUpdate();
			System.out.println("Success");
		}
		else if(classs.equals("Business Class")) {
			System.out.println(fightid);
			String sqle = "update flightdetails set BUSSINESS = BUSSINESS - ? where fightid = ?"   ;
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@//localhost:1521/XE","system","system");
			PreparedStatement ps = con.prepareStatement(sqle);
			ps.setInt(1, totalseats);
			ps.setString(2, Integer.toString(fightid));
			
			ps.executeUpdate();
			System.out.println("Success");	
		}
		else if(classs.equals("Premium Economy")) {
			System.out.println(fightid);
			String sqle = "update flightdetails set PREMIUMECONOMY = PREMIUMECONOMY - ? where fightid = ?"   ;
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@//localhost:1521/XE","system","system");
			PreparedStatement ps = con.prepareStatement(sqle);
			ps.setInt(1, totalseats);
			ps.setString(2, Integer.toString(fightid));
			
			ps.executeUpdate();
			System.out.println("Success");	
			
		}
		
		System.out.println(fightid);
		String sqle = "update flightdetails set economy = economy - ? where fightid = ?"   ;
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection con = DriverManager.getConnection("jdbc:oracle:thin:@//localhost:1521/XE","system","system");
		PreparedStatement ps = con.prepareStatement(sqle);
		ps.setInt(1, totalseats);
		ps.setString(2, Integer.toString(fightid));
		
		ps.executeUpdate();
		System.out.println("Success");
		
		
	}

	@Override
	public List gettrips(int uid) {
		// TODO Auto-generated method stub
		String sql = "select * from bookingdetails b LEFT OUTER JOIN flightdetails f ON b.flightid = f.fightid  where b.userid = ? ORDER BY b.bid desc";
		
		List l= jdbcTemplate.queryForList(sql,uid);
		return l;
	}

	@Override
	public void canceltrip(int bid, int flightid, int userid, int totalcost, String classs, int totalseats,
			long cardno) {
		String sql = "delete from bookingdetails where bid = ?";
		jdbcTemplate.update(sql,bid);
		String sqlc = "insert into cancelationdetails VALUES (cancelid_sequence.nextval,?,?,?,?,?,?)";
		jdbcTemplate.update(sqlc,new Object[] {
				bid,flightid,userid,totalcost,classs,totalseats
		});
	}

	@Override
	public List getboardingpassdetails(int bid) {
		// TODO Auto-generated method stub
		String sql = "select * from bookingdetails b left outer JOIN flightdetails f on b.flightid=f.fightid LEFT OUTER JOIN additionalbookingdetails a on b.bid = a.bid where a.bid=?";
		List l= jdbcTemplate.queryForList(sql,bid);
		System.out.println(l);
		return l;
	}
	
	@Override
	public List getseatno(int flightid) {
		System.out.println(flightid);
		String sql ="select * from seatno where flightid = ?";
				List l= jdbcTemplate.queryForList(sql,flightid);
				System.out.println(l);
				
				return l;
	}
	
	@Override
	public void removeseats(int flightid,String name,String surname,int age,long phoneno,String passportno,String seatno ) {
		System.out.println(seatno);
		String getbid = "select max(bid) as bid from bookingdetails";
		GetBid bidg = (GetBid) jdbcTemplate.queryForObject(getbid,new BeanPropertyRowMapper(GetBid.class));
		
		
		String removeseat = "delete from seatno where flightid = ? and seatno = ?";
		jdbcTemplate.update(removeseat,new Object[] {flightid,seatno});
		
		String adddetails= "insert into additionalbookingdetails values(?,?,?,?,?,?,?)";
		jdbcTemplate.update(adddetails,new Object[] {bidg.getBid(),name,surname,age,phoneno,passportno,seatno});
		
	}
	
	@Override
	public List getallflightdetails() {
		String sql ="select * from flightdetails order by fightid desc";
		List l= jdbcTemplate.queryForList(sql);
		return l;
		
	}

	@Override
	public List getalluserdetails() {
		String sql ="SELECT * FROM flightbookinguser";
		List l= jdbcTemplate.queryForList(sql);
		return l;
		
	}
	
	@Override
	public List getboardingpassengerdetails(int flightid) {
		// TODO Auto-generated method stub
		String sql = "select * from bookingdetails b left outer JOIN flightdetails f on b.flightid=f.fightid LEFT OUTER JOIN additionalbookingdetails a on b.bid = a.bid where f.fightid=?";
		List l= jdbcTemplate.queryForList(sql,flightid);
		System.out.println(l);
		return l;
	}

	@Override
	public void addflight(String departuretime, String arrivaltime, String from, String to, String totaltime, int cost,
			int economyseats, int premiumeconomyseats, int businessclassseats, String departuredate) {
		// TODO Auto-generated method stub
		System.out.println("DAO");
		String sql = "insert into flightdetails values (FLIGHTID_SEQUENCE.nextval,?,?,?,?,?,?,?,?,?,?,?,?)";
		jdbcTemplate.update(sql,new Object[] {
				"https://i.ibb.co/XSSsRdF/Whats-App-Image-2022-03-21-at-3-27-36-PM-removebg-preview.png","Udan",departuretime,arrivaltime,from,to,totaltime,cost,economyseats,premiumeconomyseats,businessclassseats,departuredate
		});
		
		String getbid = "select max(fightid) as flightid from flightdetails";
		GetFlightid flightid = (GetFlightid) jdbcTemplate.queryForObject(getbid,new BeanPropertyRowMapper(GetFlightid.class));
		System.out.println(flightid.getFlightid());
		
		String addseat = "insert all into seatno values (?,'A1') into seatno values (?,'A2') into seatno values (?,'A3') into seatno values (?,'A4') into seatno values (?,'A5') into seatno values (?,'A6') into seatno values (?,'A7') into seatno values (?,'A8') into seatno values (?,'A9') into seatno values (?,'B1') into seatno values (?,'B2') into seatno values (?,'B3') into seatno values (?,'B4') into seatno values (?,'B5') into seatno values (?,'B6') into seatno values (?,'B7') into seatno values (?,'B8') into seatno values (?,'B9') into seatno values (?,'C1') into seatno values (?,'C2') into seatno values (?,'C3') into seatno values (?,'C4') into seatno values (?,'C5') into seatno values (?,'C6') into seatno values (?,'C7') into seatno values (?,'C8') into seatno values (?,'C9') into seatno values (?,'D1') into seatno values (?,'D2') into seatno values (?,'D3') into seatno values (?,'D4') into seatno values (?,'D5') into seatno values (?,'D6') into seatno values (?,'D7') into seatno values (?,'D8') into seatno values (?,'D9') into seatno values (?,'E1') into seatno values (?,'E2') into seatno values (?,'E3') into seatno values (?,'E4') into seatno values (?,'E5') into seatno values (?,'E6') into seatno values (?,'E7') into seatno values (?,'E8') into seatno values (?,'E9') into seatno values (?,'F1') into seatno values (?,'F2') into seatno values (?,'F3') into seatno values (?,'F4') into seatno values (?,'F5') into seatno values (?,'F6') into seatno values (?,'F7') into seatno values (?,'F8') into seatno values (?,'F9') SELECT * FROM dual";
		jdbcTemplate.update(addseat,new Object[] {
				flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid(),flightid.getFlightid()
				});
	}
}
