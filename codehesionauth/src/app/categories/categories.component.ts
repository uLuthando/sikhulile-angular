import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private userservice:UserService) { }

categories:any[] = []

  ngOnInit(): void {
    this.userservice.getCategories().subscribe(res=>{
      //console.log(res);
      this.categories = res.data
      console.log(this.categories);
      
    })
  }

}
