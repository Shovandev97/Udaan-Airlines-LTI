package com.infotech.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infotech.model.LoginUser;
import com.infotech.model.RegisterUser;
import com.infotech.service.UserService;
import com.infotech.service.UserServiceImpl;

@RestController
@RequestMapping(value="/registerprocess")
@CrossOrigin("*")
public class HelloWorldController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value="/")
	public void hello(@RequestBody RegisterUser registeruser) throws Exception{
		
		System.out.println(registeruser.getName());
		userService.register(registeruser);

	}
}
