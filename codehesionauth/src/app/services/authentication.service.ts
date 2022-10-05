import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from '../AuthInterceptor';


const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const ACCESS_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjRDRDlGNDg5RDEwOTg4QjA5NDk3RjVBM0Y0OTc4M0Q4MUFEMkI2MDBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlRObjBpZEVKaUxDVWxfV2o5SmVEMkJyU3RnQSJ9.eyJuYmYiOjE2NjQ5NjczMDQsImV4cCI6MTY2NDk3MDkwNCwiaXNzIjoiaHR0cHM6Ly9lZGVhZi1hcGktc3RhZ2luZy5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6ImVEZWFmQXBpIiwiY2xpZW50X2lkIjoid2ViLWRhc2hib2FyZCIsInN1YiI6Ijk2MDY2ZTI4LTc2ZDctNDIyYS04M2ZkLWE0NGI2YTYwYzEwNiIsImF1dGhfdGltZSI6MTY2NDk2NzMwNCwiaWRwIjoibG9jYWwiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsImp0aSI6IjJBQzFFRjY1OTY4MDk4MjA5MDU4MjU4RUZBODlCNTMxIiwiaWF0IjoxNjY0OTY3MzA0LCJzY29wZSI6WyJhZG1pbkFwaSIsImVtYWlsIiwibW9iaWxlQXBpIiwib3BlbmlkIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.YEohaZ_msTmk10C4NmnbC9UJxVbQRYts9jOe5M54LrgZzwI4oRARr1BqkJ7b7tXXRLuNLC5tmieXbdAin7Xxs6J-c32jqVxdnLBdKFFQ3KacV-NpV5wKmAzgTAJbqRdi3F3AzWlVugV-QarPl00j9rXXz3152PQH90MpjI_2kJ76d3m-lASbCdfsWMH_pRoh7RQv9nbCtYvthVDtSDl5ZvMhyioinQmLIVyTZx5G2iaqGrKc5KOMuD1HVXRRJCgw2vVn67bcwXsH8zCeBPk_KExyu4cqTwxKpmOW7NsMwU2gVXSRCYG8klFfKMVbbYR_FzeUHLbbzk2XhqucHVFAmA'
const API_URL = 'https://edeaf-api-staging.azurewebsites.net/';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + ACCESS_TOKEN
  })
};

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  redirectUrl = '';

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private static log(message: string): any {
    console.log(message);
  }

  constructor(private http: HttpClient, private tokenService: TokenService) { }

login(loginBody: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();

    const body = new HttpParams()
      .set('username', loginBody.Email)
      .set('password', loginBody.Password)
      .set('grant_type', 'password')
      .set('client_id',environment.auth.client_id)
      .set('scope',environment.auth.scope)
      .set('client_secret',environment.auth.client_secret)


    return this.http.post<any>(API_URL + 'connect/token', body, HTTP_OPTIONS)
      .pipe(
        tap(res => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthenticationService.handleError)
      )
  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    return this.http.post<any>(API_URL + 'connect/token', body, HTTP_OPTIONS)
      .pipe(
        tap(res => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthenticationService.handleError)
      );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

  // register(data: any): Observable<any> {
  //   return this.http.post<any>(API_URL + 'oauth/signup', data)
  //     .pipe(
  //       tap(_ => AuthenticationService.log('register')),
  //       catchError(AuthenticationService.handleError)
  //     );
  // }

  secured(): Observable<any> {
    return this.http.get<any>(API_URL + 'secret')
      .pipe(catchError(AuthenticationService.handleError));
  }
  
}
