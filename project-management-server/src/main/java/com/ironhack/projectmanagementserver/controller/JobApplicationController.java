package com.ironhack.projectmanagementserver.controller;

import com.ironhack.projectmanagementserver.DTO.JobApplicationDTO;
import com.ironhack.projectmanagementserver.service.impl.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping("/jobApplicaion")
    @ResponseStatus(HttpStatus.CREATED)
    public void savejobApplication(@RequestBody JobApplicationDTO jobApplication){
         jobApplicationService.saveJobApplication(jobApplication);
    }


}
