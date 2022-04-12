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

import com.app.dto.BookCarDTO;
import com.app.dto.LoginRequest;
import com.app.dto.PaymentDto;
import com.app.dto.UserDTO;
import com.app.pojos.Booking;
import com.app.pojos.Feedback;
import com.app.pojos.User;
import com.app.service.ICommonService;
import com.app.service.IFeedbackService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController 
{
	@Autowired
	public ICommonService commonService;
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	public IFeedbackService feedbackService;
	

	public UserController() {
		System.out.println("in ctor of " + getClass().getName());
	}

	@PostMapping("/login")
     public ResponseEntity<?>authenticateUser(@RequestBody LoginRequest request)
     {
		System.out.println("in authenticate user " + request.getEmail()+ " "+request.getPassword());
		User user = userService.authenticateUser(request.getEmail(), request.getPassword());
		return new ResponseEntity<>(user,HttpStatus.OK);
     }
	
	@PostMapping("/signup")
	public ResponseEntity<?>signUpUser(@RequestBody UserDTO userdto) 
	{
		System.out.println("in add user details " + userdto);
		userService.registerUser(userdto);
		return new ResponseEntity<>("Sign Up Sucessful..Please Login...!!!",HttpStatus.OK);
	}
	
	@PutMapping("/edit_profile")
	public ResponseEntity<?>updateUserProfile(@RequestParam int uid, @RequestBody UserDTO userDTo)
	{
		System.out.println("inside update user profile(Controller method) " + userDTo);
		userService.updateUserProfile(uid, userDTo);
		return new ResponseEntity<>("User Profile Updated...!!!",HttpStatus.OK);
	
	}

	@GetMapping("/car_list")
	public ResponseEntity<?>showlist()
	{
		return new ResponseEntity<>(commonService.getAllCarlist(),HttpStatus.OK);
	}
	
	@PostMapping("/book_car")
	public ResponseEntity<Booking>bookCar(@RequestBody BookCarDTO bookCarDTO)
	{
		System.out.println("Booking Car Deatils " + bookCarDTO);
		
		return new ResponseEntity<Booking>(userService.bookCar(bookCarDTO),HttpStatus.OK);

	}
	
	@PostMapping("/payment")
	public ResponseEntity<?> addPaymentInfo(@RequestBody PaymentDto paymentDto) {
		userService.pay(paymentDto);
		return new ResponseEntity<>("Payment info added successfully",HttpStatus.OK);
	}
	
	@DeleteMapping("/cancel_booking")
	public ResponseEntity<?>cancelCarBooking(@RequestParam int book_Id )
	{
		System.out.println("Cancel Book Car" + book_Id);
		userService.cancelCarBooking(book_Id);
		return new ResponseEntity<>("Cancel Car Booking...!!!",HttpStatus.OK);
	}
	

	@PostMapping("/feedback")
	public ResponseEntity<?>feedbackUser(@RequestBody Feedback feedback) 
	{
		System.out.println("in add user feedback " + feedback);
		feedbackService.registerFeedback(feedback);
		return new ResponseEntity<>("FeedBack Submitted...!!!",HttpStatus.OK);
	}
	
	@GetMapping("/user-booking")
	public ResponseEntity<?> userBookingDetails(@RequestParam int userID)
	{
		System.out.println("in user booking " + userID);
		
		return new ResponseEntity<>(userService.bookingDetails(userID),HttpStatus.OK);
	}
}

