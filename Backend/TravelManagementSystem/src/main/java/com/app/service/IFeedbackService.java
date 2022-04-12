package com.app.service;

import java.util.List;

import com.app.pojos.Feedback;

public interface IFeedbackService
{
	public Feedback registerFeedback(Feedback feedback);
	
	public   List<Feedback> getAllFeedbacklist();
}
