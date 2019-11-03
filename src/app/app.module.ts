import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryMarketComponent } from './category-market/category-market.component';
import { CategoryName } from './Service/CustomPipe';


const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'category', component: CategoryMarketComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryMarketComponent,
    CategoryName
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
