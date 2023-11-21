package com.ironhack.projectmanagementserver.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobApplicationDTO {
    private String position;
    private String companyName;
    private Long interviewId;


}
