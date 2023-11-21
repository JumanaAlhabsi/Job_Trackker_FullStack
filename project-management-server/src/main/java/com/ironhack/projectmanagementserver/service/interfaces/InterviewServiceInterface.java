package com.ironhack.projectmanagementserver.service.interfaces;

import com.ironhack.projectmanagementserver.model.Interview;


public interface InterviewServiceInterface {
    Interview findById(Long id);
    void saveInterview(Interview interview);
    void update(Long id, Interview interview);
    void deleteInterview(Long id);
}
