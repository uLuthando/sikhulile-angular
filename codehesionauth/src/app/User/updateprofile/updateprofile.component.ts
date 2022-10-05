import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { get } from 'http';
import { UserService } from 'src/app/services/user.service';
import { CustomvalidationService } from '../saIDValidator';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  
  constructor(private userservice:UserService, private router:Router) { }
  disableInput:boolean = false
  matcher =  new MyErrorStateMatcher()

  updateProfileForm = new FormGroup({
    Name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    Surname: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    Email: new FormControl('',[
      Validators.required,
      Validators.pattern("[^_\\W\\s@][\\w.!]*[\\w]*[@][\\w]*[.][\\w.]*"), Validators.minLength(3)]),
    IDNumber: new FormControl('',[Validators.required, CustomvalidationService.validateSaID]),
    DOB: new FormControl({value:'', disabled:this.disableInput}),
  })



  get name(): AbstractControl {
    return this.updateProfileForm.get('Name')!;
  }

  get surname(): AbstractControl {
    return this.updateProfileForm.get('Surname')!;
  }

  get email(): AbstractControl {
    return this.updateProfileForm.get('Email')!;
  }

  get idnum(): AbstractControl {
    return this.updateProfileForm.get('IDNumber')!;
  }

  get dob(): AbstractControl {
    return this.updateProfileForm.get('DOB')!;
  }

  loading:boolean = false

  ngOnInit(): void {

   this.userservice.getCurrentUser().subscribe(res=>{
    console.log(res);
    this.name.setValue(res.data.name)
    this.surname.setValue(res.data.lastName)
    this.email.setValue(res.data.email)
   })
    
  }

  watcher(e:any){
    //console.log(e);
   // console.log(e.length);

    if(e.length ==6){
      var yy = e.substring(0, 2),
      mm = e.substring(2, 4),
      dd = e.substring(4, 6);
      var dob = new Date(yy, (mm - 1), dd).toLocaleDateString('sv-SE');
      this.dob.setValue(dob)
    }
    
  }

  validateDate(e:any){
    var date = e.target.value
   // this.dob.value == date ? console.log(false):console.log(true);
    console.log(this.dob.value, date);
  }

  onFormSubmit(): void {

    const updateFormBody = {
      Name: this.name.value,
      Email: this.email.value,
      Lastname: this.surname.value
    }

    this.loading = true;
    this.userservice.updateUserDetails(updateFormBody)
      .subscribe(() => {
        this.loading = false;
        this.router.navigate(['/categories']).then(_ => console.log('You are secure now!'));
      }, (err: any) => {
        console.log(err);
        this.loading = false;
      });
   console.log(updateFormBody);

   
    
  }

}
