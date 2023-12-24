package com.ironhack.projectmanagementserver.controller;

import com.ironhack.projectmanagementserver.DTO.JobApplicationDTO;
import com.ironhack.projectmanagementserver.model.Interview;
import com.ironhack.projectmanagementserver.model.JobApplication;
import com.ironhack.projectmanagementserver.service.impl.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping("/addJobApplicaion")
    @ResponseStatus(HttpStatus.CREATED)
    public void savejobApplication(@RequestBody JobApplication jobApplication){
         jobApplicationService.saveJobApplication(jobApplication);
    }


    //change the status (from pending,reviewed,interview,rejected,Accepted)
    @PutMapping("/updateStatus/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updatestatus(@PathVariable String status,@RequestBody JobApplication jobApplication){
        jobApplicationService.updateStatus(status, jobApplication);
    }








}
