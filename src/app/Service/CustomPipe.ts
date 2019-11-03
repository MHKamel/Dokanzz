import { Pipe, PipeTransform } from '@angular/core';
import { MarketService } from './market.service';

@Pipe({ name: 'ShowName' })
export class CategoryName implements PipeTransform {
    constructor(private _MarketService:MarketService){}
  transform(value: number):string {
      return this._MarketService.Allcategory.filter(x=>x.id==value)[0].categoryName
  }
}