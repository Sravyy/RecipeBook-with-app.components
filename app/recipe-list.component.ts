import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template:`
    <select (change)="onChange($event.target.value)">
      <option value="allRecipes" selected="selected">All Recipes</option>
      <option value="cakes">Cakes</option>
      <option value="indian" >Indian</option>
   </select>

    <ul>
      <li *ngFor="let currentRecipe of childRecipeList">
        {{currentRecipe.title}}<br>
        {{currentRecipe.ingredients}}<br>
        {{currentRecipe.directions}}
        <button  class="btn-success" (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
      </li>
    </ul>

  `
})


export class RecipeListComponent {
 @Input() childRecipeList: Recipe[];
 @Output() clickSender = new EventEmitter();
 filterdByRecipes: string = "allRecipes";

 onChange(optionFromMenu){
   this.filterdByRecipes = optionFromMenu;
 }

 editButtonHasBeenClicked(recipeToEdit: Recipe){
   this.clickSender.emit(recipeToEdit);
 }

}
