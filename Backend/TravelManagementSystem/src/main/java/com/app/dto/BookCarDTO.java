package com.app.dto;

import java.util.Date;

import com.app.pojos.Car;
import com.app.pojos.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class BookCarDTO {

private int booking_id;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date start_datetime;
    
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date end_datetime;
    
	private String source;
	
	private String destination;
	
	@JsonIgnoreProperties({"name","email","password","mobile_no","aadhar_card","license_no","dob","role","booking"})
	private User uid;
	
	@JsonIgnoreProperties({"plate_number","model_name","capacity","fuelType","status","price","booking"})
	private Car carid;

	public BookCarDTO() {
		
	}

	public BookCarDTO(int booking_id, Date start_datetime, Date end_datetime, String source, String destination,
			User uid, Car carid) {
		super();
		this.booking_id = booking_id;
		this.start_datetime = start_datetime;
		this.end_datetime = end_datetime;
		this.source = source;
		this.destination = destination;
		this.uid = uid;
		this.carid = carid;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public Date getStart_datetime() {
		return start_datetime;
	}

	public void setStart_datetime(Date start_datetime) {
		this.start_datetime = start_datetime;
	}

	public Date getEnd_datetime() {
		return end_datetime;
	}

	public void setEnd_datetime(Date end_datetime) {
		this.end_datetime = end_datetime;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public User getUid() {
		return uid;
	}

	public void setUid(User uid) {
		this.uid = uid;
	}

	public Car getCarid() {
		return carid;
	}

	public void setCarid(Car carid) {
		this.carid = carid;
	}

	@Override
	public String toString() {
		return "BookCarDTO [booking_id=" + booking_id + ", start_datetime=" + start_datetime + ", end_datetime="
				+ end_datetime + ", source=" + source + ", destination=" + destination + ", uid=" + uid + ", carid="
				+ carid + "]";
	}
}
