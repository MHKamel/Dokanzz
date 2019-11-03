import { Injectable } from '@angular/core';
import { category } from './categoryModel';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  Allcategory:category[]
  constructor() {
    this.Allcategory=[];
    this.getAllCategory();
   }

getAllCategory(){
  this.Allcategory.push(
new category(1,"phone",""),
new category(2,"electronic",""),
new category(3,'tv',"electronic"))
}

AddnewCatgory(Cat:category){

  this.Allcategory.push(
    new category ((this.Allcategory[this.Allcategory.length - 1].id) + 1,Cat.categoryName,Cat.topCategory))
}




}
