package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Booking;
import com.app.pojos.Car;

@Repository
public interface BookCarRepositoty  extends JpaRepository<Booking, Integer>{
	
	 @Query("select b from Booking b where uid.id=:u_id")
     List<Booking> findByUserId(@Param("u_id") int userId);
	
	 @Query("select b.carid from Booking b where booking_id=:bid ")
	 Car findCarByBookingId(@Param("bid") int bid);
	 
	 @Modifying
	 @Query("delete from Booking b where booking_id=:bid")
	 void deleteBooking(@Param("bid") int bid);
}