package com.app.dto;

import com.app.pojos.CarStatus;

public class CarDTO {

	private String plate_number;
    private String model_name;
    private int capacity;
    private String fuelType;
    private double price;
    private CarStatus status;
	   
	public String getPlate_number() {
		return plate_number;
	}

	public void setPlate_number(String plate_number) {
		this.plate_number = plate_number;
	}

	public String getModel_name() {
		return model_name;
	}

	public void setModel_name(String model_name) {
		this.model_name = model_name;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public CarStatus getStatus() {
		return status;
	}

	public void setStatus(CarStatus status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "CarDTO [plate_number=" + plate_number + ", model_name=" + model_name + ", capacity=" + capacity
				+ ", fuel_type=" + fuelType + ", price=" + price + ", status=" + status + "]";
	}
}
