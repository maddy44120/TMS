package com.app.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom.excs.UserHandlingException;
import com.app.dao.AdminRepository;
import com.app.dao.CarRepository;
import com.app.dao.PaymentRepository;
import com.app.dto.CarDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Car;
import com.app.pojos.CarStatus;
import com.app.pojos.Payment;
import com.app.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	@Autowired
	private AdminRepository adminRepo;

	@Autowired
	private PaymentRepository payRepo;
	
	@Autowired
	private CarRepository carRepo;

	@Override
	public User authenticateAdmin(String email, String password) {

		return adminRepo.loginByEmailandPassword(email, password)
				.orElseThrow(() -> new UserHandlingException("Invalid Credentials!!!!"));
	}

	@Override
	public User updateAdminProfile(int adminId, UserDTO userDto) {

		System.out.println("Inside update Admin Profile (servive method)" + userDto);
		User adminDetails = adminRepo.findById(adminId).get();
		System.out.println("Admin Details from " + adminDetails);

		adminDetails.setName(userDto.getName());
		adminDetails.setPassword(userDto.getPassword());
		adminDetails.setMobile_no(userDto.getMobile_no());

		System.out.println("Updated Admin details " + adminDetails);
		return adminDetails;
	}

	@Override
	public void addCar(CarDTO carDto) {
		Car car = new Car();
		BeanUtils.copyProperties(carDto, car);
		car.setStatus(CarStatus.AVAILABLE);
		carRepo.save(car);
	}

	@Override
	public List<Payment> getPaymentHistory() {
		return payRepo.findallP();
	}
}
