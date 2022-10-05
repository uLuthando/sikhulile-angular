import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { NavComponent } from './home/nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './AuthInterceptor';
import { UpdateprofileComponent } from './User/updateprofile/updateprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './categories/home/home.component';
import { AlphabetComponent } from './categories/alphabet/alphabet.component';
import { CalendarComponent } from './categories/calendar/calendar.component';
import { EmergencyservicesComponent } from './categories/emergencyservices/emergencyservices.component';
import { GreetingsComponent } from './categories/greetings/greetings.component';
import { MedicalComponent } from './categories/medical/medical.component';
import { NumbersComponent } from './categories/numbers/numbers.component';
import { WorkplacesignsComponent } from './categories/workplacesigns/workplacesigns.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UpdateprofileComponent,
    CategoriesComponent,
    NotFoundComponent,
    HomeComponent,
    AlphabetComponent,
    CalendarComponent,
    EmergencyservicesComponent,
    GreetingsComponent,
    MedicalComponent,
    NumbersComponent,
    WorkplacesignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  HttpClient,
  /*HttpHandler*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
