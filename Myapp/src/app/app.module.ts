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
import { ProductdatabaseComponent } from './productdatabase/productdatabase.component';
import { PatientComponent } from './patient/patient.component';
import { TestserviceComponent } from './testservice/testservice.component';
import { ActorComponent } from './actor/actor.component';
import { CheckstudentComponent } from './checkstudent/checkstudent.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MediaComponent } from './media/media.component';
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
 DoctorinfoComponent,
 ProductdatabaseComponent,
 PatientComponent,
 TestserviceComponent,
 ActorComponent,
 CheckstudentComponent,
 LoginpageComponent,
 MediaComponent
    
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
