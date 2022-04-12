package com.app.dto;

import java.util.Date;

public class UserCarBookingListDTO {
private int booking_id;
private String destination;
private Date end_datetime;
private String source;
private Date start_datetime;
private int car_id;
private int user_id;
public UserCarBookingListDTO() {
	
}
public UserCarBookingListDTO(int booking_id, String destination, Date end_datetime, String source, Date start_datetime,
		int car_id, int user_id) {
	this.booking_id = booking_id;
	this.destination = destination;
	this.end_datetime = end_datetime;
	this.source = source;
	this.start_datetime = start_datetime;
	this.car_id = car_id;
	this.user_id = user_id;
}
public int getBooking_id() {
	return booking_id;
}
public void setBooking_id(int booking_id) {
	this.booking_id = booking_id;
}
public String getDestination() {
	return destination;
}
public void setDestination(String destination) {
	this.destination = destination;
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
public Date getStart_datetime() {
	return start_datetime;
}
public void setStart_datetime(Date start_datetime) {
	this.start_datetime = start_datetime;
}
public int getCar_id() {
	return car_id;
}
public void setCar_id(int car_id) {
	this.car_id = car_id;
}
public int getUser_id() {
	return user_id;
}
public void setUser_id(int user_id) {
	this.user_id = user_id;
}
@Override
public String toString() {
	return "GetBookingListDTO [booking_id=" + booking_id + ", destination=" + destination + ", end_datetime="
			+ end_datetime + ", source=" + source + ", start_datetime=" + start_datetime + ", car_id=" + car_id
			+ ", user_id=" + user_id + "]";
}

}
