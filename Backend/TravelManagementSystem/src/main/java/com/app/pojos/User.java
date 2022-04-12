package com.app.pojos;

import java.time.LocalDate;
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
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer u_id;
	
	@Column(length=30,name="name")
	@NotBlank(message="name must be supplied")
	private String name;
	
	@Column(unique=true,name="email")
	@NotBlank(message="Email is required")
	@Length(min=5,max=25,message="Invalid Email Length")
	@Email(message="Invalid email format")
	private String email;
	
	@Column(length = 20,nullable = false, name="password")
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})")
	private String password;
	
	@Length(max=13)
	@Column(name="mobile_no")
	private String mobile_no="+91";
	
	@Length(max=15)
	@Column(name="aadhar_card")
	@NotNull
	private String aadhar_card;
	
	@Length(max=15)
	@Column(name="license_no")
	@NotNull
	private String license_no;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@PastOrPresent(message = "invalid dob date")
	@Column(name="dob")
	private LocalDate dob;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@OneToMany(mappedBy="uid",fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	@JsonIgnoreProperties("uid")
	private List<Booking> booking = new ArrayList<>();
	
	public User() {
		System.out.println("In ctor of "+getClass().getName());
	}

	public User(Integer u_id,String name,String email,String password,String mobile_no,
			String aadhar_card,String license_no,LocalDate dob,Role role,List<Booking> booking) {
		super();
		this.u_id = u_id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobile_no = mobile_no;
		this.aadhar_card = aadhar_card;
		this.license_no = license_no;
		this.dob = dob;
		this.role = role;
		this.booking = booking;
	}

	public Integer getU_id() {
		return u_id;
	}

	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getAadhar_card() {
		return aadhar_card;
	}

	public void setAadhar_card(String aadhar_card) {
		this.aadhar_card = aadhar_card;
	}

	public String getLicense_no() {
		return license_no;
	}

	public void setLicense_no(String license_no) {
		this.license_no = license_no;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	public List<Booking> getBooking() {
		return booking;
	}

	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}

	@Override
	public String toString() {
		return "User [u_id=" + u_id + ", name=" + name + ", email=" + email + ", password=" + password + ", mobile_no="
				+ mobile_no + ", aadhar_card=" + aadhar_card + ", license_no=" + license_no + ", dob=" + dob + ", role="
				+ role + ", booking=" + booking + "]";
	}
	
	
	
	
}
