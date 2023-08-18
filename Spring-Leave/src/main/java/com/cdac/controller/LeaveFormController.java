package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.LeaveForm;
import com.cdac.entity.Student;
import com.cdac.service.LeaveService;
import com.cdac.service.StudentService;
@RestController
@CrossOrigin
public class LeaveFormController {


	@Autowired
	private LeaveService leaveService;
	
	
	@RequestMapping("/leaves")
	public List<LeaveForm> get() {
		return leaveService.listOfleaves();
	}
	
	
	@PostMapping("/add-leave")
	public String add(@RequestBody LeaveForm leave) {
		leaveService.add(leave);
		
		return "Leave details added successfully!";
	}
	
	
	
	
	@PostMapping("/remove-leave")
	public String delete(@RequestBody LeaveForm leave) {
		leaveService.deleteEntity(leave);
		
		return "Leave update successfully!";
	}
}
	