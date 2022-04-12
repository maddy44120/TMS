package com.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookCarDTO;
import com.app.dto.PaymentDto;

@RestController
@RequestMapping("/util")
@CrossOrigin

public class TestController {

	@GetMapping("/bookDto")
	public BookCarDTO get() {
		return new BookCarDTO();
	}
	

	@GetMapping("/payDto")
	public PaymentDto get1() {
		return new PaymentDto();
	}
}
