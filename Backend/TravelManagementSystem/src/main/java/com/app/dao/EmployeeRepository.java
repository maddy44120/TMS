package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.User;

public interface EmployeeRepository extends JpaRepository<User,Integer> {
	
	@Query("select u from User u where email=:em and password=:pwd")
	Optional<User> loginEmployeeByEmailAndPassword(@Param("em") String email, @Param("pwd") String password);
	
	@Query("select u from User u where u_id=:eid")
	Optional<User> findById(@Param("eid") int u_id);
}