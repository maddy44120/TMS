package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.FeedbackRepository;
import com.app.pojos.Feedback;

@Service
public class FeedbackServiceImpl implements IFeedbackService
{
	@Autowired
	FeedbackRepository feedRepo;
	
	@Override
	public Feedback registerFeedback(Feedback feedback) {

		return feedRepo.save(feedback);
	}
	
	@Override
	public List<Feedback> getAllFeedbacklist() {
		return feedRepo.findAll();
	}
}