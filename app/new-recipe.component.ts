import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
  <h1>New Recipe</h1>
  <div>
    <label>Enter the title of the Recipe:</label><br>
    <input #title/>
  </div>
  <div>
    <label>Enter the ingredients of the Recipe(comma seperated):</label><br>
    <input #ingredients/>
  </div>
  <div>
    <label>Enter the directions for the Recipe:</label><br>
    <input #directions/>
  </div>
  <br>
  <button  class="btn-info" (click)="submitForm(title.value, ingredients.value, directions.value); title.value=''; ingredients.value=''; directions.value=''; ">Add</button>
  `
})

export class NewTaskComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, ingredients: string, directions: string) {
    var newRecipeToAdd: Recipe = new Recipe(title, ingredients, directions);
    this.newRecipeSender.emit(newRecipeToAdd);
  }

}
