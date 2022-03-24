package com.infotech.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.infotech.model.LoginUser;
import com.infotech.model.RegisterUser;


public interface UserService {
	void register(RegisterUser user) throws Exception;
	int login(String email,String password) throws Exception;
	void adminlogin(String email,String password) throws Exception;

}
