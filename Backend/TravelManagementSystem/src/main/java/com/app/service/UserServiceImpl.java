package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.custom.excs.UserHandlingException;
import com.app.dao.BookCarRepositoty;
import com.app.dao.CarRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.BookCarDTO;
import com.app.dto.PaymentDto;
import com.app.dto.UserDTO;

@Service
@Transactional 
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private BookCarRepositoty bookCarRepo;
	
	@Autowired
	private PaymentRepository payRepo;
	
	@Autowired
	private CarRepository carRepo;
	
	@Override
	public User authenticateUser(String email, String password) {
		
		return userRepo.findByEmailAndPassword(email, password).orElseThrow(() -> new UserHandlingException("Invalid Credentials!!!!"));
	}
	
	@Override
	public User registerUser(UserDTO userDTO) 
	{
		User user = new User();
		BeanUtils.copyProperties(userDTO, user);
		user.setRole(Role.USER);
		System.out.println(user);
		return userRepo.save(user);
	}
	
	@Override
	public User updateUserProfile(int userId, UserDTO userDTO) {
		
		System.out.println("Inside update User Profile (servive method)"+userDTO);
		User userDetails=userRepo.findById(userId).get();
		System.out.println("User Details from "+userDetails);
		
		userDetails.setName(userDTO.getName());
		userDetails.setPassword(userDTO.getPassword());
		userDetails.setMobile_no(userDTO.getMobile_no());
		
		System.out.println("Updated user details "+userDetails);
        return userDetails;
	}

	@Override
	public Booking bookCar(BookCarDTO bookCarDto) {
		
		System.out.println("dto "+bookCarDto);
		Booking carBook = new Booking();
		
		BeanUtils.copyProperties(bookCarDto, carBook);
		System.out.println("after copying"+carBook);
		carBook.setBooking_status(BookingStatus.SUCCESS);
		Booking booking = bookCarRepo.save(carBook);
		
		java.util.Optional<Car> carO = carRepo.findById(bookCarDto.getCarid().getC_id());
		if(carO.isPresent()) {
			Car car = carO.get();
			car.setStatus(CarStatus.UNAVAILABLE);
			carRepo.save(car);
		}
			
		return booking;
	}

	@Override
	public void pay(PaymentDto paymentDto) {

		Payment payment = new Payment();
		BeanUtils.copyProperties(paymentDto, payment);
		payRepo.save(payment);
	}

	@Override
	public void cancelCarBooking(int bid ) {
		System.out.println("Cancel Car Booking "+bid);

		Optional<Booking> bookOpt = bookCarRepo.findById(bid);
		if(bookOpt.isPresent()) {
			Booking booking = bookOpt.get();
			booking.setBooking_status(BookingStatus.CANCEL);
			bookCarRepo.save(booking);
		}

		Car car=bookCarRepo.findCarByBookingId(bid);
		car.setStatus(CarStatus.AVAILABLE);
	}
	
	@Override
	public List<Booking> bookingDetails(int userId) {
		
	  List<Booking> bookingDetails=bookCarRepo.findByUserId(userId);
		
		return bookingDetails;		
	}	
}