package com.infotech.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infotech.dao.UserDao;
import com.infotech.model.LoginUser;
import com.infotech.model.RegisterUser;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDao	userDao;

	public void register(RegisterUser user) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Service");
		userDao.register(user);
		
	}

	@Override
	public int login(String email,String password) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Service");
		return userDao.login(email,password);
	}

	@Override
	public void adminlogin(String email, String password) throws Exception {
		// TODO Auto-generated method stub
		userDao.adminlogin(email,password);
	}


	


}
