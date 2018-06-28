import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Name', 'Test desc', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
