package com.cdac.entity;

import java.util.List;
import java.util.Optional;

import javax.persistence.*;




@Entity(name = "student")
public class Student {
    @Id
    private long prnnumber;
    
    private String username;
    private String email;
    private long mobile;
    private String password;
    
    @OneToMany(mappedBy = "student")
    private List<LeaveForm> leaves;
    
    @ManyToOne@JoinColumn(name = "empid")
        private Faculty faculty;

	public long getPrnnumber() {
		return prnnumber;
	}

	public void setPrnnumber(long prnnumber) {
		this.prnnumber = prnnumber;
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

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<LeaveForm> getLeaves() {
		return leaves;
	}

	public void setLeaves(List<LeaveForm> leaves) {
		this.leaves = leaves;
	}

	public Faculty getFaculty() {
		return faculty;
	}

	public void setFaculty(Faculty faculty) {
		this.faculty = faculty;
	}
	
	
		
}

