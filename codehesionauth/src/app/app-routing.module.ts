import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetComponent } from './categories/alphabet/alphabet.component';
import { CalendarComponent } from './categories/calendar/calendar.component';
import { CategoriesComponent } from './categories/categories.component';
import { EmergencyservicesComponent } from './categories/emergencyservices/emergencyservices.component';
import { GreetingsComponent } from './categories/greetings/greetings.component';
import { MedicalComponent } from './categories/medical/medical.component';
import { NumbersComponent } from './categories/numbers/numbers.component';
import { WorkplacesignsComponent } from './categories/workplacesigns/workplacesigns.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './User/login/login.component';
import { UpdateprofileComponent } from './User/updateprofile/updateprofile.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch:'full'},

{
  path: 'login', component: LoginComponent
},

{
  path: 'updateprofile', component: UpdateprofileComponent
},

{
  path: 'categories', component: CategoriesComponent
},

{
  path: 'categories/alphabet', component: AlphabetComponent
},

{
  path: 'categories/calender', component: CalendarComponent
},

{
  path: 'categories/emergency services', component: EmergencyservicesComponent
},

{
  path: 'categories/greetings', component: GreetingsComponent
},

{
  path: 'categories/medical', component: MedicalComponent
},

{
  path: 'categories/numbers', component: NumbersComponent
},

{
  path: 'categories/workplace signs', component: WorkplacesignsComponent
},

{
  path: '404', component: NotFoundComponent
},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }