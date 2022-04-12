package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name="feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int f_id;
	
	@Column(unique = true, name="u_email")
	@NotBlank(message = "Email is required")
	@Length(min = 5,max=25,message = "Invalid Email length")
	@Email(message = "Invalid email format")
	private String u_email;
	
	@Column(length = 30, name="message")
	private String message;
	
	@Min(value=1)
	@Max(value=5)
	@Column(name="rating")
	private Integer rating;
	
	
	public int getF_id() {
		return f_id;
	}

	public void setF_id(int f_id) {
		this.f_id = f_id;
	}

	public String getU_email() {
		return u_email;
	}

	public void setU_email(String u_email) {
		this.u_email = u_email;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Feedback [f_id=" + f_id + ", u_email=" + u_email + ", message=" + message + ", rating=" + rating + "]";
	}
	
}
