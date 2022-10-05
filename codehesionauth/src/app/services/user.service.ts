import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'https://edeaf-api-staging.azurewebsites.net/';
const ACCESS_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjRDRDlGNDg5RDEwOTg4QjA5NDk3RjVBM0Y0OTc4M0Q4MUFEMkI2MDBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlRObjBpZEVKaUxDVWxfV2o5SmVEMkJyU3RnQSJ9.eyJuYmYiOjE2NjQ5NjczMDQsImV4cCI6MTY2NDk3MDkwNCwiaXNzIjoiaHR0cHM6Ly9lZGVhZi1hcGktc3RhZ2luZy5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6ImVEZWFmQXBpIiwiY2xpZW50X2lkIjoid2ViLWRhc2hib2FyZCIsInN1YiI6Ijk2MDY2ZTI4LTc2ZDctNDIyYS04M2ZkLWE0NGI2YTYwYzEwNiIsImF1dGhfdGltZSI6MTY2NDk2NzMwNCwiaWRwIjoibG9jYWwiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsImp0aSI6IjJBQzFFRjY1OTY4MDk4MjA5MDU4MjU4RUZBODlCNTMxIiwiaWF0IjoxNjY0OTY3MzA0LCJzY29wZSI6WyJhZG1pbkFwaSIsImVtYWlsIiwibW9iaWxlQXBpIiwib3BlbmlkIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.YEohaZ_msTmk10C4NmnbC9UJxVbQRYts9jOe5M54LrgZzwI4oRARr1BqkJ7b7tXXRLuNLC5tmieXbdAin7Xxs6J-c32jqVxdnLBdKFFQ3KacV-NpV5wKmAzgTAJbqRdi3F3AzWlVugV-QarPl00j9rXXz3152PQH90MpjI_2kJ76d3m-lASbCdfsWMH_pRoh7RQv9nbCtYvthVDtSDl5ZvMhyioinQmLIVyTZx5G2iaqGrKc5KOMuD1HVXRRJCgw2vVn67bcwXsH8zCeBPk_KExyu4cqTwxKpmOW7NsMwU2gVXSRCYG8klFfKMVbbYR_FzeUHLbbzk2XhqucHVFAmA'

const HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + ACCESS_TOKEN
    })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  

  updateUserDetails(formBody:any): Observable<any> {
    return this.http.put<any>(API_URL + 'v1/admin/Users/current/', formBody, HTTP_OPTIONS)
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(API_URL + 'v1/admin/categories/',HTTP_OPTIONS);
  }
  

}