package com.app.service;

import java.util.List;

import com.app.pojos.Car;

public interface ICommonService 
{
	public List<Car> getAllCarlist();
 
	void deleteCar(Integer carId);

}