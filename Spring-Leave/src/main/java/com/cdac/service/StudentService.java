package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Faculty;
import com.cdac.entity.Student;
import com.cdac.repository.StudentRepository;
@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepo;

	public void add(Student student) {
		studentRepo.save(student);
	}

	public List<Student> listOfStudents() {
		return studentRepo.findAll();
	}
	
	
	public Student getStudentById(long id) {
		// TODO Auto-generated method stub
		 return studentRepo.findById(id);
	}
	
	

	public Student getSByEmailAndPass(String email, String password) {
		return studentRepo.findByEmailAndPassword(email,password);
	}
	
	
	
	
	
}
