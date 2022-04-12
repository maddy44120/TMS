package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.User;

public interface AdminRepository extends JpaRepository<User,Integer> {
	
	@Query("select u from User u where email=:em and password=:pwd")
	Optional<User> loginByEmailandPassword(@Param("em") String email, @Param("pwd") String password);
	
	@Query("select u from User u where u_id=:aid")
	Optional<User> findById(@Param("aid") int u_id);
}