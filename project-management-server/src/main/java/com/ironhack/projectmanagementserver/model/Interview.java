package com.ironhack.projectmanagementserver.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Interview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String location;
    private Date dateTime;
    @OneToMany(mappedBy = "interview", cascade = CascadeType.ALL)
    private List<JobApplication> jobApplications;
}
