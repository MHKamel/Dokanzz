import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { product } from '../Service/ProductModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { category } from '../Service/categoryModel';
import { MarketService } from '../Service/market.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  title = 'task';
  allproduct: product[] = []
  deleteproduct: product[] = []
  ProductModel: product;
  ProductForm: FormGroup;
  isEdit: boolean = false;
  CheckProduct: boolean = false;
  Allcategory:category[]=[];
  //-------------------------------------------------------------------------------------------------------
  constructor(config: NgbModalConfig, private modalService: NgbModal,private _MarketService:MarketService) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.Allcategory=this._MarketService.Allcategory;
    this.allproduct.push(new product(1, "200", "Frist Product", 300,1),
      new product(2, "200A", "Secand Product", 300,2),
      new product(3, "210", "third Product", 400,3),
      new product(4, "250C", "Fourth Product", 1000,1)
    )
    this.ProductModel = new product(0, "", "", 0,0)
  }

  //-----------------------------------------------------------------------------------------------------------------

  openBackDropCustomClass(content, ProductEdit: product) {
    debugger;

    if (ProductEdit != undefined) {
      this.isEdit = true;
      this.ProductModel = new product(ProductEdit.id, ProductEdit.code, ProductEdit.name, ProductEdit.price,ProductEdit.Categoryid)
    } else {
      this.ProductModel = new product(0, "", "", 0,0);
    }
    this.createForm(this.ProductModel);
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }
  //-------------------------------------------------------------------------------------------------------------
  onSubmit() {
    if (this.isEdit == false) {
      this.allproduct.push(new product((this.allproduct[this.allproduct.length - 1].id) + 1, this.ProductModel.code, this.ProductModel.name, this.ProductModel.price,this.ProductModel.Categoryid))
      console.log(this.allproduct)
    } else {
      // for (var i in this.allproduct) {
      //   if (this.allproduct[i].id == this.ProductModel.id) {
      //     this.allproduct[i].name == this.ProductModel.name
      //     this.allproduct[i].price == this.ProductModel.price
      //     this.allproduct[i].code == this.ProductModel.code
      //      break; //Stop this loop, we found it!
      //   }
      // }
      debugger;

      var foundIndex = this.allproduct.findIndex(x => x.id == this.ProductModel.id);
      this.allproduct[foundIndex].name = this.ProductModel.name
      this.allproduct[foundIndex].price = this.ProductModel.price
      this.allproduct[foundIndex].code = this.ProductModel.code
      this.allproduct[foundIndex].Categoryid = this.ProductModel.Categoryid

    }
    this.modalService.dismissAll();
    this.isEdit = false;

  }



  // ---------------------------------------------------------------------------------------------------------------------------------- //
  createForm(ProductModel: product) {
    this.ProductForm = new FormGroup({
      codeControl: new FormControl(ProductModel.code, Validators.required),
      nameControl: new FormControl(ProductModel.name, Validators.required),
      PriceControl: new FormControl(ProductModel.price, Validators.required),
      Category: new FormControl(ProductModel.Categoryid, Validators.required),

    });
  }
  ///--------------------------------------------
  handleClick(event, productDelete: product) {
    if (event.target.checked) {
      this.deleteproduct.push(new product(productDelete.id, productDelete.code, productDelete.name, productDelete.price,productDelete.Categoryid))
    } else {
      var index = this.deleteproduct.findIndex(x => x.id == productDelete.id);
      this.deleteproduct.splice(index, 1)
    }
  }

  //----------------------------------------------------------------------
  RemoveProduct() {
    if (this.deleteproduct.length == this.allproduct.length) {
      this.allproduct = []
    } else {
      this.deleteproduct.forEach(element => {
        var indexfff = this.allproduct.findIndex(x => x.id == element.id);
        this.allproduct.splice(indexfff, 1)
      });
    }
    this.deleteproduct = [];
  }
  ///-------------------------------------------------------------------
  CheckAllProduct(event) {
    if (event.target.checked) {
      this.CheckProduct = true;
      this.deleteproduct = this.allproduct;
    } else {
      this.CheckProduct = false;
      this.deleteproduct = [];
    }
  }
}
