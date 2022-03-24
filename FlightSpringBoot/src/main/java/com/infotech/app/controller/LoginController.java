package com.infotech.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infotech.model.LoginUser;
import com.infotech.service.UserService;

@RestController
@RequestMapping(value="/login")
@CrossOrigin("*")
public class LoginController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value="/loginprocess/{email}/{password}")
	public int login(@PathVariable("email") String email,@PathVariable("password") String password) throws Exception {
		System.out.println(email);
		System.out.println(password);
		System.out.println("Controller");
		
		return userService.login(email,password);
	}
	
	@RequestMapping(value="/adminloginprocess/{email}/{password}")
	public void adminlogin(@PathVariable("email") String email,@PathVariable("password") String password) throws Exception {
		System.out.println(email);
		System.out.println(password);
		
		
		userService.adminlogin(email,password);
	}

}
