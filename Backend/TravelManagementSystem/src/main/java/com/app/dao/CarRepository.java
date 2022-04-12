package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Car;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Integer>{

    List<Car> findByIsDeleted(boolean deleted);
}