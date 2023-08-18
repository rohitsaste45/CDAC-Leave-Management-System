package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.LeaveForm;
import com.cdac.entity.Student;
import com.cdac.repository.LeaveFormRepository;
import com.cdac.repository.StudentRepository;
@Service
public class LeaveService {

	
	@Autowired
	private LeaveFormRepository leavesRepo;

	public void add(LeaveForm leave) {
		leavesRepo.save(leave);
	
	}

	public List<LeaveForm> listOfleaves() {
		
		return leavesRepo.findAll();
	}
	
	public void deleteEntity(LeaveForm leave) {
		leavesRepo.delete(leave);
	}
}
	



