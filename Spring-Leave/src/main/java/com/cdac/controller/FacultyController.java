package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Faculty;
import com.cdac.entity.Student;
import com.cdac.repository.FacultyRepository;
import com.cdac.service.FacultyService;
@RestController
@CrossOrigin
public class FacultyController {

	@Autowired
	private  FacultyService fs;

	@PostMapping("/add-faculty")
	public String add(@RequestBody Faculty faculty) {
		fs.add(faculty);
		return "faculty details added successfully!";
	}
	
	@PostMapping("/login-faculty")
	public String find(@RequestBody Faculty faculty) {
			    Faculty authenticatedFaculty = fs.getFByEmailAndPass(faculty.getEmail(), faculty.getPassword());
			   if(authenticatedFaculty!=null&&faculty.getEmail().equals(authenticatedFaculty.getEmail()))
		return "Welcome to Leave management ";
				return "Invalid Credentials ";
			  
		
		}

}
