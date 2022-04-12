package com.app.service;

import java.util.List;

import com.app.dto.CarDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Payment;
import com.app.pojos.User;

public interface IAdminService {
	
	User authenticateAdmin(String email, String password);
	
	User updateAdminProfile(int adminId,UserDTO userDto);

	void addCar(CarDTO carDto);

	List<Payment> getPaymentHistory();	
}