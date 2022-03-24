package com.infotech.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties.Jdbc;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.infotech.model.LoginUser;
import com.infotech.model.RegisterUser;

@Component
public class UserDaoImpl implements UserDao{
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public void register(RegisterUser user) throws Exception{
		// TODO Auto-generated method stub
		
		String sql1 = "select * from flightbookinguser where email =? ";
		List l = jdbcTemplate.queryForList(sql1,user.getEmail());
		
		if(l.size() > 0) {
			System.out.println("User already exists");
			throw new Exception("User already exists");
		}else {
			String sql = "insert into flightbookinguser values(fbuserid_sequence.NEXTVAL,?,?,?,?)";
			jdbcTemplate.update(sql,new Object[] 
					{user.getName(),user.getMobileno(),user.getEmail(),user.getPassword()});
			System.out.println("Dao");
		}
		
		
	}

	@Override
	public int login(String email,String password) throws Exception {
		// TODO Auto-generated method stub
		String query="select * from flightbookinguser where email=? and password=?";
		List l = jdbcTemplate.queryForList(query,new Object[]{email,password});
		System.out.println(l.size());
		if(l.size()>0){
			RegisterUser user1 = (RegisterUser) jdbcTemplate.queryForObject(query,new Object[]{email,password},new BeanPropertyRowMapper(RegisterUser.class));
			System.out.println(user1.getUserid());
			return user1.getUserid();
		}else {
			System.out.println("Please check user credentials");
			throw new Exception("Please check user credentials");
		}
		
	}

	@Override
	public void adminlogin(String email, String password) throws Exception {
		// TODO Auto-generated method stub
		String query="select * from flightbookingadmin where username=? and password=?";
		List l = jdbcTemplate.queryForList(query,new Object[]{email,password});
		System.out.println(l.size());
		if(l.size()>0){
			System.out.println("Success");
		}else {
			System.out.println("Please check user credentials");
			throw new Exception("Please check user credentials");
		}
	}
	
	


}
