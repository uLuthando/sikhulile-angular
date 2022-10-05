import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  loading:boolean = false
  matcher =  new MyErrorStateMatcher()

  loginForm = new FormGroup({
    Email: new FormControl('',),
    Password: new FormControl('')
  })

  get email(): AbstractControl {
    return this.loginForm.get('Email')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('Password')!;
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.loading = true;
    this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.loading = false;
        this.router.navigate(['/categories']).then(_ => console.log('You are secure now!'));
      }, (err: any) => {
        console.log(err);
        this.loading = false;
      });

      console.log(this.loginForm.value);
      
  }

}
