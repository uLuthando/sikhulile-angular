import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
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
  path: '404', component: NotFoundComponent
},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }