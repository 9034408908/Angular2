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
import { SchoolcrudeComponent } from './schoolcrude/schoolcrude.component';
import{ HttpModule } from '@angular/http';
import { DoctorinfoComponent } from './doctorinfo/doctorinfo.component';
@NgModule({
  declarations: [
    AppComponent,
 CalculatorComponent,
 PotentialComponent,
 ArrayComponent,
 MarksComponent,
 ProductComponent,
 CrudeproductComponent,
 AssetcurdeComponent,
 SchoolcrudeComponent,
 DoctorinfoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
