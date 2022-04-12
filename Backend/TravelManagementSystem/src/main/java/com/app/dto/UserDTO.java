package com.app.dto;

import java.time.LocalDate;

public class UserDTO {
	private String name;
	private String email;
    private String password;
	private String mobile_no;
	private String aadhar_card;
	private String license_no;
	private LocalDate dob;
	
	public UserDTO() {
		
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
	
	@Override
	public String toString() {
		return "UserDTO [name=" + name + ", email=" + email + ", password=" + password + ", mobile_no=" + mobile_no
				+ ", aadhar_card=" + aadhar_card + ", license_no=" + license_no + ", dob=" + dob + "]";
	}

	
}
