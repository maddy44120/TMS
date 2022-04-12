package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CarRepository;
import com.app.pojos.Car;

@Service
public class CommonServiceImpl implements ICommonService 
{
	@Autowired
	CarRepository carrepo;
	
	@Override
	public List<Car> getAllCarlist() {
		return carrepo.findByIsDeleted(false) ;
	}
	
	@Override
	public void deleteCar(Integer carId) {

		Optional<Car> carOpt = carrepo.findById(carId);
		if(carOpt.isPresent()) {
			Car car = carOpt.get();
			car.setDeleted(true);
			carrepo.save(car);
		}
	}
}