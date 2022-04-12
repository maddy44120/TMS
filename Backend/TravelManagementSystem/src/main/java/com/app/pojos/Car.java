package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;
import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="cars")
public class Car {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer c_id;
	
	@Column(length = 20, name = "plate_number", unique = true,nullable = false)
	private String plate_number;
	
	@Column(length = 30, name = "model_name")
	@Size(min = 2, max = 15)
	@NonNull
	private String model_name;
	
	@Column(name = "capacity")
	@Range(min = 2, max = 7)
	@NonNull
	private Integer capacity;
	
	@Column(length = 30, name = "fuelType")
	@NonNull
	private String fuelType;
	
	@Enumerated(EnumType.STRING)
	private CarStatus status;
	
	@Column(name = "price")
	@NonNull
	private Double price;
	
	@Column(name = "isDeleted")
	@NonNull
	private boolean isDeleted; 
	
	public boolean isDeleted() {
		return isDeleted;
	}
	
	public void setDeleted(boolean deleted) {
		isDeleted=deleted;
	}
	
	@OneToMany(mappedBy="carid",fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	@JsonManagedReference
	@JsonIgnoreProperties("carid")
	private List<Booking> booking = new ArrayList<>();
	
	public Car() {
		System.out.println("in ctor of " + getClass().getName());
	}

	public Car(Integer c_id,String plate_number,String model_name,Integer capacity,
			String fuelType,CarStatus status,Double price,List<Booking> booking) {
		super();
		this.c_id = c_id;
		this.plate_number = plate_number;
		this.model_name = model_name;
		this.capacity = capacity;
		this.fuelType = fuelType;
		this.status = status;
		this.price = price;
		this.booking = booking;
	}

	public Integer getC_id() {
		return c_id;
	}

	public void setC_id(Integer c_id) {
		this.c_id = c_id;
	}

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

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public CarStatus getStatus() {
		return status;
	}

	public void setStatus(CarStatus status) {
		this.status = status;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
	
	public List<Booking> getBooking() {
		return booking;
	}

	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}

	@Override
	public String toString() {
		return "Car [c_id=" + c_id + ", plate_number=" + plate_number + ", model_name=" + model_name + ", capacity="
				+ capacity + ", fuelType=" + fuelType + ", status=" + status + ", price=" + price + ", booking="
						+ booking + "]";
	}
	
	
	
	
}
