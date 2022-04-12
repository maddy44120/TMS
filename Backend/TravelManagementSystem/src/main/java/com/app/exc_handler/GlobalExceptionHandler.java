package com.app.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom.excs.UserHandlingException;
import com.app.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(UserHandlingException.class)
	public ResponseEntity<ErrorResponse> handleUserHandlingException(UserHandlingException e){
		System.out.println("in handle user exc");
		return new ResponseEntity<>(new ErrorResponse("Invalid Login",e.getMessage()),
				HttpStatus.UNAUTHORIZED);
	}
}
