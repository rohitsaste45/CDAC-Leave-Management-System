package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.LeaveForm;
import com.cdac.entity.Student;

public interface LeaveFormRepository extends JpaRepository<LeaveForm, Long> {

}
