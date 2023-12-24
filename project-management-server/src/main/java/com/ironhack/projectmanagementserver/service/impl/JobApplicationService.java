package com.ironhack.projectmanagementserver.service.impl;

import com.ironhack.projectmanagementserver.DTO.JobApplicationDTO;
import com.ironhack.projectmanagementserver.model.Interview;
import com.ironhack.projectmanagementserver.model.JobApplication;
import com.ironhack.projectmanagementserver.repository.InterviewRepository;
import com.ironhack.projectmanagementserver.repository.JobApplicationRepository;
import com.ironhack.projectmanagementserver.service.interfaces.JobApplicationServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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



    public void saveJobApplication(JobApplication jobApplication) {
//        JobApplication newJobApplication = new JobApplication();
//        newJobApplication.setPosition(jobApplication.getPosition());
//        newJobApplication.setCompanyName(jobApplication.getCompanyName());
//        newJobApplication.setInterview(interviewRepository.findById(jobApplication.getInterview().getId()).orElse(null).get());
//        newJobApplication.setStatus(jobApplication.getStatus());
//        jobApplicationRepository.save(newJobApplication);

        JobApplication newJobApplication = new JobApplication();
        newJobApplication.setPosition(jobApplication.getPosition());
        newJobApplication.setCompanyName(jobApplication.getCompanyName());

        if (jobApplication.getInterview() != null && jobApplication.getInterview().getId() != null) {
            Long interviewId = jobApplication.getInterview().getId();
            Interview interview = interviewRepository.findById(interviewId).orElse(null);
            if (interview != null) {
                newJobApplication.setInterview(interview);
            } else {
                throw new IllegalStateException("Interview not found for ID: " + interviewId);
            }
        }

        newJobApplication.setStatus(jobApplication.getStatus());
        jobApplicationRepository.save(newJobApplication);
    }


    public void updateStatus(String status, JobApplication jobApplication) {
        JobApplication jobAppFromDB = jobApplicationRepository.findById(jobApplication.getId()).orElseThrow(()-> new ResponseStatusException((HttpStatus.NOT_FOUND), "job application not found" ));
        jobApplication.setStatus(jobAppFromDB.getStatus());
        jobApplicationRepository.save(jobAppFromDB);

    }



}

