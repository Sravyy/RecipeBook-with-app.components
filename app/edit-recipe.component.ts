import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector:'edit-recipe',
  template:`
    <div>
      <div *ngIf="childSelectedRecipe">
        <h3>{{childSelectedRecipe.title}}</h3>
        <h3>{{childSelectedRecipe.ingredients}}</h3>
        <h3>{{childSelectedRecipe.directions}}</h3>
        <hr>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Title</label>
        <input [(ngModel)]="childSelectedRecipe.title"/><br>
        <label>Enter Recipe ingredients</label>
        <input [(ngModel)]="childSelectedRecipe.ingredients"/><br>
        <label>Enter Recipe Directions</label>
        <input [(ngModel)]="childSelectedRecipe.directions"/><br>
        <button  class="btn-warning" (click)="doneButtonClicked()">Done</button>
      </div>
    </div>

  `
})

export class EditRecipeComponent{
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
