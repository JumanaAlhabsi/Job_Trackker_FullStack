package com.ironhack.projectmanagementserver.service.impl;

import com.ironhack.projectmanagementserver.DTO.JobApplicationDTO;
import com.ironhack.projectmanagementserver.model.JobApplication;
import com.ironhack.projectmanagementserver.repository.InterviewRepository;
import com.ironhack.projectmanagementserver.repository.JobApplicationRepository;
import com.ironhack.projectmanagementserver.service.interfaces.JobApplicationServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationService implements JobApplicationServiceInterface {

    @Autowired
    private  InterviewRepository interviewRepository;


    @Autowired
    private JobApplicationRepository jobApplicationRepository;


    @Autowired
    public JobApplicationService(InterviewRepository interviewRepository , JobApplicationRepository jobApplicationRepository) {
        this.interviewRepository = interviewRepository;
        this.jobApplicationRepository = jobApplicationRepository;
    }



    public void saveJobApplication(JobApplicationDTO jobApplication) {
        JobApplication newJobApplication = new JobApplication();
        newJobApplication.setPosition(jobApplication.getPosition());
        newJobApplication.setCompanyName(jobApplication.getCompanyName());
        newJobApplication.setInterview(interviewRepository.findById(jobApplication.getInterviewId()).get());
        jobApplicationRepository.save(newJobApplication);
    }




}

