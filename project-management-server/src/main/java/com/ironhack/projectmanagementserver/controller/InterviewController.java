package com.ironhack.projectmanagementserver.controller;

import com.ironhack.projectmanagementserver.model.Interview;

import com.ironhack.projectmanagementserver.repository.InterviewRepository;
import com.ironhack.projectmanagementserver.service.impl.interviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class InterviewController {

    @Autowired
    private InterviewRepository interviewRepository;

    @Autowired
    private interviewService interviewService;

    @GetMapping("/Interviews/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Interview getintervieIdById(@PathVariable(name = "id") Long interviewId) {
        return interviewRepository.findById(interviewId).get();
    }

    @GetMapping("/interviewId")
    @ResponseStatus(HttpStatus.OK)
    public List<Interview> getInterviewByCategoryAndDepartment() {
        return interviewRepository.findAll();
    }

    @PostMapping("/interviews")
    @ResponseStatus(HttpStatus.CREATED)
    public void addInterview(@RequestBody @Valid Interview interview){
        interviewService.saveInterview(interview);
    }

    @PutMapping("/interviews/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateInterview(@PathVariable Long id,@RequestBody @Valid Interview interview){
        interviewService.update(id, interview);
    }


    @DeleteMapping("/interviews/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteInterview(@PathVariable Long id){
        interviewService.deleteInterview(id);
    }
}
