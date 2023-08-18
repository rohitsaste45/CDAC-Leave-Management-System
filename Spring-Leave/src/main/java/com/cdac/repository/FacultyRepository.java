package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Faculty;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {
@Query("select f from Faculty f where f.email=?1 and f.password=?2")
	public Faculty findByEmailAndPassword(String email,String password);

	}
	
	
	

