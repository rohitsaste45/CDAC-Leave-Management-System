package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Faculty;
import com.cdac.entity.Student;
import com.cdac.service.StudentService;

@RestController
@CrossOrigin //required for our frontend code which will be running on different server to be able to communicate with our backend rest api
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	//http://localhost:9090/trains?source=Mumbai&destination=Delhi
	//@RequestMapping("/trains")
	@PostMapping("/students")
	public List<Student> get() {
		return studentService.listOfStudents();
	}

	@PostMapping("/add-student")
	public String add(@RequestBody Student student) {
		studentService.add(student);
		return "Student details added successfully!";
	}
	
	
	@PostMapping("/login-student")
	public String find(@RequestBody Student student) {
	  Student authenticatedStudent = studentService.getSByEmailAndPass(student.getEmail(), student.getPassword());
	  if (authenticatedStudent != null && student.getEmail().equals(authenticatedStudent.getEmail())) {
	    return "Welcome to Leave management";
	  } else {
	    return "Invalid credentials";
	  }
	}

	
	
	@RequestMapping("find-all-user")
	public List<Student> showStudent() {
		return studentService.listOfStudents();
	}
	
	
	
}
