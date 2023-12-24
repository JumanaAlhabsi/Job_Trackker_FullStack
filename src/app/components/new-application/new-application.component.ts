import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jobTrackerService } from 'src/app/services/jobTracker.service';
import { JobApplication } from 'src/app/models/jobApplication.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})

export class NewApplicationComponent {

  constructor(private http: HttpClient) {}

  onSubmit(formData: any): void {
    // You can handle the form submission here
    // Send the form data to your backend server using an HTTP request

    // Example: Sending form data to a server
    this.http.post('YOUR_BACKEND_ENDPOINT', formData).subscribe(
      (response) => {
        // Handle the success response
        console.log('Form data sent successfully', response);
        // You can perform any additional actions here upon successful form submission
      },
      (error) => {
        // Handle the error response
        console.error('Error occurred while sending form data', error);
        // You can handle errors or show error messages to the user here
      }
    );
  }
}
