package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom.excs.UserHandlingException;
import com.app.dao.BookCarRepositoty;
import com.app.dao.EmployeeRepository;
import com.app.dto.UserCarBookingListDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Booking;
import com.app.pojos.User;

@Service
@Transactional 
public class EmployeeServiceImpl  implements IEmployeeService{
	
	@Autowired
	EmployeeRepository empRepo;
	
	@Autowired
	BookCarRepositoty bookCarRepo;

	@Override
	public User authenticateEmployee(String email, String password) {
		
		return empRepo.loginEmployeeByEmailAndPassword(email, password).orElseThrow(() -> new UserHandlingException("Invalid Credentials!!!!"));
	}

	@Override
	public User updateEmployeeProfile(int empId, UserDTO userDto) {
		
		System.out.println("Inside update Employee Profile (Service method)"+userDto);
		User empDetails=empRepo.findById(empId).get();
		System.out.println("Employee Details from "+ empDetails);
		
		empDetails.setName(userDto.getName());
		empDetails.setPassword(userDto.getPassword());
		empDetails.setMobile_no(userDto.getMobile_no());
		
		System.out.println("Updated Employee details "+ empDetails);
        return empDetails;
	}
 
	@Override
	public List<UserCarBookingListDTO> getAllUserBookingList() {
		List<UserCarBookingListDTO> list= new ArrayList<UserCarBookingListDTO>();
		List<Booking>bList=bookCarRepo.findAll();
         System.out.println("Get Booking List");
        bList.forEach((b)->{
        	list.add(new UserCarBookingListDTO(b.getBooking_id(), b.getDestination(), b. getEnd_datetime(), b.getSource(), b.getStart_datetime(), b.getCarid().getC_id(),b.getUid().getU_id()));
        });
		 return list;	 
	}		
}