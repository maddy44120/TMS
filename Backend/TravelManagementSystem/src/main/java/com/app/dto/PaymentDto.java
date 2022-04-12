package com.app.dto;

import java.math.BigDecimal;

import com.app.pojos.Booking;
import com.app.pojos.Car;
import com.app.pojos.PaymentMethod;
import com.app.pojos.PaymentStatus;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class PaymentDto {

	private BigDecimal amount;

	private PaymentMethod paymentMethod;

	private PaymentStatus paymentStatus;

	@JsonIgnoreProperties({ "start_datetime", "end_datetime", "source", "destination" })
	private Booking book_id;

	@JsonIgnoreProperties({ "plate_number", "model_name", "capacity", "fuelType", "status", "price", "booking" })
	private Car carid;

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public PaymentStatus getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(PaymentStatus paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public Booking getBook_id() {
		return book_id;
	}

	public void setBook_id(Booking book_id) {
		this.book_id = book_id;
	}

	public Car getCarid() {
		return carid;
	}

	public void setCarid(Car carid) {
		this.carid = carid;
	}
}