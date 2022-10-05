import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private userservice:UserService, private router:Router) { }

categories:any[] = []

  ngOnInit(): void {
    this.userservice.getCategories().subscribe(res=>{
      //console.log(res);
      this.categories = res.data
      console.log(this.categories);
      
    })
  }

  goToCategory(route:string){
    this.router.navigate(['categories/'+route.toLowerCase()])
  }

}
