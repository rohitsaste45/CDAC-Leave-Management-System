package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
public Student findById(long prn);

public Student findByEmailAndPassword(String email,String password);

}
