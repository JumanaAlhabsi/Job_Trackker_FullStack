package com.ironhack.projectmanagementserver.service.interfaces;

import com.ironhack.projectmanagementserver.DTO.JobApplicationDTO;
import com.ironhack.projectmanagementserver.model.JobApplication;

public interface JobApplicationServiceInterface {
    void saveJobApplication(JobApplication jobApplication);

    void updateStatus(String status, JobApplication jobApplication);
}
