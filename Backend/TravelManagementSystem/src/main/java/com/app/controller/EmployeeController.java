package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.User;
import com.app.service.ICommonService;
import com.app.service.IEmployeeService;

@RestController
@RequestMapping("/emp")
@CrossOrigin
public class EmployeeController {
	@Autowired
	public ICommonService commonService;
	
	@Autowired
	IEmployeeService empService;
	
	public EmployeeController() {
		System.out.println("in ctor of " + getClass().getName());
	}
	
	@PostMapping("/login")
    public ResponseEntity<?>authenticateEmployee(@RequestBody LoginRequest request)
    {
		System.out.println("in authenticate Employee " + request.getEmail()+ " "+request.getPassword());
		User user = empService.authenticateEmployee(request.getEmail(), request.getPassword());
		return new ResponseEntity<>(user,HttpStatus.OK);
    }
	
	@PutMapping("/editProfile")
	public ResponseEntity<?>updateEmployeeProfile(@RequestParam int employeeId, @RequestBody UserDTO userDTo)
	{
		System.out.println("inside update admin profile(Controller method) " + userDTo);
		empService.updateEmployeeProfile(employeeId, userDTo);
		return new ResponseEntity<>("Employee Profile Updated...!!!",HttpStatus.OK);
	
	}

	@GetMapping("/car_list")
	public ResponseEntity<?>showlist()
	{
		return new ResponseEntity<>(commonService.getAllCarlist(),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteCar")
	public ResponseEntity<?>deleteCar(Integer carId)
	{
		System.out.println("Car Details to be Deleted" + carId);
		commonService.deleteCar(carId);
		return new ResponseEntity<>("Car Details deleted...!!!",HttpStatus.OK);
	}

	
	@GetMapping("/booking_list")
	public ResponseEntity<?> userBookingList()
	{
		System.out.println("Get All User Booking List");
		return new ResponseEntity<>(empService.getAllUserBookingList(),HttpStatus.OK);
	}	
}