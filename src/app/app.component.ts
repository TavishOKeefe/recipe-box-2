import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipes: Recipe[] = [
    new Recipe("Cookies", ["Flour", "Sugar", "1 Egg", "Baking Powder"], ["Mix", "Bake", "Enjoy"]),
    new Recipe("Cakes", ["Flour", "Sugar", "1 Egg", "Oil"], ["Mix", "Bake", "Enjoy"]),
    new Recipe("Tacos", ["Cilantro", "Beans"], ["Mix", "Bake", "Enjoy"])
  ];
  selectedRecipe = null;

  toggleDetails(currentRecipe){
    currentRecipe.showDetails = !currentRecipe.showDetails;
  }

  editRecipe(recipe){
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe.title);
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  randomColor() {
    let number1: number = Math.floor(Math.random()*255+1);
    let number2: number = Math.floor(Math.random()*255+1);
    let number3: number = Math.floor(Math.random()*255+1);

    let randomColor: string = `rgb(${number1}, ${number2}, ${number3})`;
    return randomColor;
  }

}
