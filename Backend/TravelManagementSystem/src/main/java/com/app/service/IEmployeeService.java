package com.app.service;

import java.util.List;

import com.app.dto.UserCarBookingListDTO;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface IEmployeeService {
	
	User authenticateEmployee(String email, String password);
	
	User updateEmployeeProfile(int empId,UserDTO userDto);
	
	public List<UserCarBookingListDTO> getAllUserBookingList();
}