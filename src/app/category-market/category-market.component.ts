import { Component, OnInit } from '@angular/core';
import { category } from '../Service/categoryModel';
import { MarketService } from '../Service/market.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-category-market',
  templateUrl: './category-market.component.html',
  styleUrls: ['./category-market.component.css']
})
export class CategoryMarketComponent implements OnInit {
  Allcategory:category[]=[];
  Category:category
  CategoryForm: FormGroup;

 
  constructor(config: NgbModalConfig, private modalService: NgbModal,private _MarketService:MarketService)
      {
        config.backdrop = 'static';
        config.keyboard = false;
        this.Category=new category(0,"","");
  }
  ngOnInit(): void {
    this.Allcategory=this._MarketService.Allcategory;
  }

  openBackDropCustomClass(content) {
    debugger;
    this.Category=new category(0,"","");
    this.createForm( this.Category);
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }



  createForm(Categorymode:category) {
    this.CategoryForm = new FormGroup({
      CategoryControl: new FormControl(Categorymode.categoryName, Validators.required),
      TopCategoryControl: new FormControl(Categorymode.topCategory),

    });
  }

  onSubmit(){
    this._MarketService.AddnewCatgory(this.Category)
    this.modalService.dismissAll();
    
  }
}

