import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JobApplication } from '../models/jobApplication.model';
import { Interview } from "../models/interview.model";

@Injectable({
  providedIn: 'root'
})
export class jobTrackerService {
    private readonly apiUrl = 'http://localhost:8008/api'
//    private readonly apiUrl = 'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';

  constructor(private http: HttpClient) {}

  
getInterviews(): Observable<Interview[]> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Interview[]>(`${this.apiUrl}/Interviews`, options);
  }

  getInterview(id: number): Observable<Interview> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Interview>(`${this.apiUrl}/Interviews/${id}`, options);
  }

  
  createInterview(interview: Interview): Observable<void> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.post<void>(`${this.apiUrl}/interviews`, interview, options);
  }

  updateinterview(interview: Interview): Observable<Interview> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.put<Interview>(`${this.apiUrl}/interviews/${interview.id}`, interview, options);
  }

  deleteInterview(id: number | null): Observable<Interview> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.delete<Interview>(`${this.apiUrl}/interviews/${id}`, options);
  }

  createJobApplication(jobApplication: JobApplication): Observable<void> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.post<void>(`${this.apiUrl}/jobApplications`, jobApplication, options);
  }


  private getAuthHeader(): HttpHeaders {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem('authToken');
    if (token === null) {
      throw null;
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
}