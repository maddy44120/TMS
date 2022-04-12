package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

	@Query("from Payment p JOIN FETCH p.book_id JOIN FETCH p.carid")
	 List<Payment> findallP();
}