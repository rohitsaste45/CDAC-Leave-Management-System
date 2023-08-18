package com.cdac.entity;

import java.util.List;
import javax.persistence.*;

@Entity
public class Faculty {
    @Id
    private long empid;
    private String username;
    private String email;
    private String password;
    private long mobile;
    
    @OneToMany(mappedBy = "faculty")
    private List<Student> students;
    
	public long getEmpid() {
		return empid;
	}
	public void setEmpid(long empid) {
		this.empid = empid;
	}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public List<Student> getStudents() {
		return students;
	}
	public void setStudents(List<Student> students) {
		this.students = students;
	}
    
    
}
