package com.ironhack.projectmanagementserver.repository;

import com.ironhack.projectmanagementserver.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication,Long> {
}
