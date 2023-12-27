# Front-End


Components:
* 		HomeComponent:
    * Displayed after user login.
        * Presents options based on the user's role:

1- For Job Seekers:
            * Apply for a job: Navigates to ApplyJobComponent.
            * View job applications: Navigates to JobApplicationsComponent.

2- For Admins:
            * View job applications (with validation controls): Navigates to AdminJobApplicationsComponent.

* 		ApplyJobComponent:
    * Provides a form for the user to apply for a job.
    * Uses the JobApplicationService to submit the application.
    * Redirects the user to JobApplicationsComponent after successful application.

* 		JobApplicationsComponent:
    * Displays a list of job applications for the logged-in Job Seeker.
    * Utilizes JobApplicationService to fetch and display job applications.
    * Allows the user to click on a job application to view details or navigate to InterviewDetailsComponent if applicable.

* 		AdminJobApplicationsComponent:
    * Displays a list of job applications for Admins to review and validate.
    * Allows Admins to update the status of job applications (pending, exam status, interview status, rejected).
    * Utilizes JobApplicationService to fetch and update job application statuses.

* 		InterviewDetailsComponent:
    * Displays details of a specific interview for a job application.
    * Retrieves interview details using InterviewService.
    * May include an option to go back to JobApplicationsComponent or other relevant views.
———————————————————————————————————————————————————————————————-

Services:
* 		JobApplicationService:
    * Manages communication with the backend for job application-related operations.
    * Methods: applyForJob(applicationDetails), getJobApplications(), getJobApplicationDetails(id), updateJobApplicationStatus(applicationId, status).
* 		InterviewService:
    * Manages communication with the backend for interview-related operations.
    * Methods: getInterviewDetails(applicationId).
———————————————————————————————————————————————————————————————-

Models:
* 		JobApplication Model:
    * Represents job application data.
    * Attributes: applicationId, userId, companyName, position, applicationDate, status, notes.
* 		Interview Model:
    * Represents interview data.
    * Attributes: interviewId, applicationId, dateTime, location.
* 		User Model:
    * Represents user data.
    * Attributes: userId, username, email, role (Admin/JobSeeker).
    * 
———————————————————————————————————————————————————————————————-

Routing:
Configure Angular Router to navigate between components based on user role and actions.
Notes:
* Introduce guards based on user roles to control access to certain routes and functionality.
* Implement a mechanism in the backend to validate job applications and update their status, allowing Admins to perform these actions.
This structure allows you to manage the different responsibilities and views for Job Seekers and Admins within the same Angular application. Adjust the components, services, and routing based on your specific backend requirements and business logic


# Back-End


1- 		UserController:
 Controller (UserController):
        * Endpoints:
        * POST /api/users/register: Register a new user (Job Seeker or Admin).
        * POST /api/users/login: Authenticate a user.

Service (UserService): needs improvement 
        * Methods:
        * registerJobSeeker(UserRegistrationDTO registrationDTO): UserDTO: Register a new Job Seeker.
        * registerAdmin(UserRegistrationDTO registrationDTO): UserDTO: Register a new Admin.
        * authenticateUser(LoginDTO loginDTO): UserDTO: Authenticate a user.

Model (User):
    * Attributes: userId, username, email, password, roles.

Security (SecurityConfig):
    * Configure role-based access control.
    * Enable JWT (JSON Web Token) authentication.
    * 
Repository (UserRepository)
———————————————————————————————————————————————————————————————-

2- 		JobApplicationController: 
Controller (JobApplicationController):
        * Endpoints:
        * POST /api/job-applications: Submit a new job application (Job Seeker only). 
        * GET /api/job-applications: Get job applications for the logged-in Job Seeker.
        * PUT /api/job-applications/{applicationId}: Update job application status (Admin only).

Service (JobApplicationService):
        * Methods:
        * applyForJob(JobApplicationDTO applicationDTO, String username): JobApplicationDTO: Submit a new job application (Job Seeker only).
        * getJobApplications(String username): List<JobApplicationDTO>: Get job applications for the logged-in Job Seeker.
        * updateJobApplicationStatus(Long applicationId, String newStatus): JobApplicationDTO: Update job application status (Admin only).

Model (JobApplication):
    * Attributes: applicationId, userId, companyName, position, applicationDate, status, notes.

Repository (JobApplicationRepository)

———————————————————————————————————————————————————————————————-

3-              InterviewController:

Controller (InterviewController):
        * Endpoints:
        * GET /api/interviews/{applicationId}: Get interview details for a specific job application (Job Seeker only).
        * POST /api/interviews/{applicationId}: Generate interview details (Admin only).

Service (InterviewService):	
        * Methods:
        * getInterviewDetails(Long applicationId, String username): InterviewDTO: Get interview details for a specific job application (Job Seeker only).
        * generateInterviewDetails(Long applicationId): InterviewDTO: Generate interview details (Admin only).

Model (Interview):	
    * Attributes: interviewId, applicationId, dateTime, location.

Repository (InterviewRepository)
———————————————————————————————————————————————————————————————-

4- 	AdminJobApplicationsController:
 Controller (AdminJobApplicationsController):
        * Endpoints:
        * GET /api/admin/job-applications: Get all job applications for Admin.
        * DELET /api/admin/job-applications/{applicationId}: Delete job application (Admin only).

Service (AdminJobApplicationsService):
        * Methods:
        * getAllJobApplications(): List<JobApplicationDTO>: Get all job applications for Admin.
        * deleteJobApplication(Long applicationId): JobApplicationDTO: Delete job application  (Admin only).

Model (JobApplication):	
    * Attributes: applicationId, userId, companyName, position, applicationDate, status, notes.

Repository (JobApplicationRepository)


———————————————————————————————————————————————————————————————-

This structure is designed to handle the scenarios you described, where Job Seekers can apply for jobs, view their applications, and view interview details, while Admins can view all applications, update application statuses, and generate interview details. If you have any specific adjustments or additional requirements, feel free to let me know!
