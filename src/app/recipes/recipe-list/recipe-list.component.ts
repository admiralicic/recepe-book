import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []  
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.themarysue.com/wp-content/uploads/2012/03/CrashDummies.jpg')
  
  constructor() { }

  ngOnInit() {
  }

}
