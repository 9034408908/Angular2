import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { PotentialComponent } from './potential/potential.component';
import { ArrayComponent } from './array/array.component';
import { MarksComponent } from './marks/marks.component';
import { ProductComponent } from './product/product.component';
import { CrudeproductComponent } from './crudeproduct/crudeproduct.component';
import { AssetcurdeComponent } from './assetcurde/assetcurde.component';
@NgModule({
  declarations: [
    AppComponent,
 CalculatorComponent,
 PotentialComponent,
 ArrayComponent,
 MarksComponent,
 ProductComponent,
 CrudeproductComponent,
 AssetcurdeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
