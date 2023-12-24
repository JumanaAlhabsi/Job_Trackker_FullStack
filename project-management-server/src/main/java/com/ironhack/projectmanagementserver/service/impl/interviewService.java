package com.ironhack.projectmanagementserver.service.impl;

import com.ironhack.projectmanagementserver.model.*;
import com.ironhack.projectmanagementserver.repository.InterviewRepository;
import com.ironhack.projectmanagementserver.service.interfaces.InterviewServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class interviewService implements InterviewServiceInterface {
    @Autowired
    private InterviewRepository interviewRepository;



    public Interview findById(Long id) {
        return interviewRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found"));
    }


    public void saveInterview(Interview interview) {
        if (interview.getId() != null) {
            Optional<Interview> optionalInterview= interviewRepository.findById(interview.getId());
            if (optionalInterview.isPresent())
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "interview with id " + interview.getId() + " already exist");
        }
        interviewRepository.save(interview);
    }

    public void update(Long Interview_id, Interview interview) {
        Interview InterviewFromDB = interviewRepository.findById(Interview_id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Interview is not found"));
        interview.setId(InterviewFromDB.getId());
        interviewRepository.save(interview);
    }

    public void deleteInterview(Long id) {
        Interview InterviewFromDB = interviewRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Interview not found"));
        interviewRepository.deleteById(id);
    }
}
