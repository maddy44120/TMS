package com.app.service;

import java.util.List;

import com.app.dto.BookCarDTO;
import com.app.dto.PaymentDto;
import com.app.dto.UserDTO;
import com.app.pojos.Booking;
import com.app.pojos.User;

public interface IUserService {
	
	User authenticateUser(String email, String password);
	
	User registerUser(UserDTO user);

	User updateUserProfile(int userId,UserDTO userDto);
	
	Booking bookCar(BookCarDTO bookCarDto);

	void pay(PaymentDto paymentDto);
	
	void cancelCarBooking(int bid);
	
	List<Booking> bookingDetails(int userID);
}