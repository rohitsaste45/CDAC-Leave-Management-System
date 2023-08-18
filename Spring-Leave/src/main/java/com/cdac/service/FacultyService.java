package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Faculty;

import com.cdac.repository.FacultyRepository;

@Service
public class FacultyService {
	
	
	@Autowired
	private FacultyRepository facultyRepo;

	public void add(Faculty faculty) {
		facultyRepo.save(faculty);
	}

	public Faculty getFByEmailAndPass(String Email,String Password) {
		return facultyRepo.findByEmailAndPassword(Email, Password);
	}
	
	
	
	
	
}