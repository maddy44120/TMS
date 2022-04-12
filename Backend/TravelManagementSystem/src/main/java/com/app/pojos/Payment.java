package com.app.pojos;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer payment_id;
	
	@Column(length = 20, name="amount")
	private BigDecimal amount;

	@Enumerated(EnumType.STRING)
	private PaymentMethod paymentMethod;

	@Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="book_id")
	@JsonIgnoreProperties("carid")
	private Booking book_id ;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="car_id")
	@JsonIgnoreProperties("booking")
	private Car carid;
	
	public Payment() {
		System.out.println("in ctor of " + getClass().getName());
	}

	public Integer getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(Integer payment_id) {
		this.payment_id = payment_id;
	}

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

	@Override
	public String toString() {
		return "Payment [payment_id=" + payment_id + ", amount=" + amount + ", paymentMethod=" + paymentMethod
				+ ", paymentStatus=" + paymentStatus + ", book_id=" + book_id + ", carid=" + carid + "]";
	}

}
