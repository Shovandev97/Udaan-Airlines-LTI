package com.infotech.dao;

import org.springframework.stereotype.Component;

import com.infotech.model.LoginUser;
import com.infotech.model.RegisterUser;

@Component
public interface UserDao {
	public void register(RegisterUser user) throws Exception;
	public int login(String email,String password) throws Exception;
	public void adminlogin(String email, String password) throws Exception;

}
