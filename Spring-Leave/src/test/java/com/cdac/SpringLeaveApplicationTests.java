package com.cdac;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cdac.repository.FacultyRepository;
import com.cdac.repository.LeaveFormRepository;
import com.cdac.repository.StudentRepository;



@SpringBootTest
class SpringLeaveApplicationTests {
@Autowired
private StudentRepository sr;
@Autowired
private FacultyRepository fr;
@Autowired
private LeaveFormRepository lr;
	@Test
	void findFaculty() {
	System.out.println("The Faculty : "+fr.findByEmailAndPassword("aditya@gmail.com","Adi@123").getEmail());

}
}
