package com.app.pojos;

import java.util.Date;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="car_booking")
public class Booking {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer booking_id;

	 @Column(name="start_datetime")
	 @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	 private Date start_datetime;
	 
	 @Column(name="end_datetime")
	 @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	 private Date end_datetime;
	 
	 @Column(length = 30, name="source")
	 private String source;
	 
	 @Column(length = 30, name="destination")
	 private String destination;

	@Column(length = 30, name="booking_status")
	@Enumerated(EnumType.STRING)
	private BookingStatus booking_status;

	public BookingStatus getBooking_status() {
		return booking_status;
	}

	public void setBooking_status(BookingStatus booking_status) {
		this.booking_status = booking_status;
	}
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	@JsonIgnoreProperties("booking")
	@JsonIgnore
	private User uid;

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="car_id")
	@JsonBackReference
	@JsonIgnoreProperties("booking")
	private Car carid;
	
	public Booking() {
		System.out.println("in ctor of " + getClass().getName());
	}
	
  public Booking(Integer booking_id, Date start_datetime, Date end_datetime,
	  String source, String destination, User uid, Car carid)  { 
		  super();
	      this.booking_id = booking_id; 
	      this.start_datetime = start_datetime;
	      this.end_datetime = end_datetime;
	      this.source = source; 
	      this.destination = destination;
	      this.uid = uid; 
	      this.carid = carid; 
	}
	public Integer getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Integer booking_id) {
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
		return "Booking [booking_id=" + booking_id + ", start_datetime=" + start_datetime + ", end_datetime="
				+ end_datetime + ", source=" + source + ", destination=" + destination + ", uid=" + uid + ", carid="
				+ carid + "]";
	}
}
