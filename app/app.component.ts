import { Component } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
     <h1>Recipe Book</h1>
     <h1>Welcome, {{name}}!</h1>
      <form>
        <input [value]="name" (input)="name = $event.target.value" type="text">
      </form>
      <recipe-list [childRecipeList]="masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>
      <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
      <edit-recipe [childSelectedRecipe]="selectedRecipe" (doneButtonClickedSender) ="finishedEditing()"></edit-recipe>
    </div>
  `
})

export class AppComponent {
  masterRecipeList: Recipe[] = [];
  selectedRecipe = null;

  addRecipe(newRecipeFromChild : Recipe){
    this.masterRecipeList.push(newRecipeFromChild)
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }
}
