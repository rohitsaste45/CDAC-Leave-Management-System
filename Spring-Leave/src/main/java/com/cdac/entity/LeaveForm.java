package com.cdac.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.*;


@Entity(name="leaveform")
public class LeaveForm {
    @Id@GeneratedValue
    private long leave_id;
    private String description;
    private String task;
    private LocalDate startDate;
    private LocalDate endDate;
    
    @ManyToOne
 @JoinColumn
    private Student student;
    
    public long getId() {
		return leave_id;
	}  
    public void setId(long id) {
		this.leave_id = id;
	}

		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getTask() {
			return task;
		}
		public void setTask(String task) {
			this.task = task;
		}

		public LocalDate getStartDate() {
			return startDate;
		}

		public void setStartDate(LocalDate startDate) {
			this.startDate = startDate;
		}

		public LocalDate getEndDate() {
			return endDate;
		}

		public void setEndDate(LocalDate endDate) {
			this.endDate = endDate;
		}

	
		
		
		
}
