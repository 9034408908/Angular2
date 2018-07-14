import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { PotentialComponent } from './potential/potential.component';
import { ArrayComponent } from './array/array.component';
import { MarksComponent } from './marks/marks.component';
import { CrudeproductComponent } from './crudeproduct/crudeproduct.component';
import { AssetcurdeComponent } from './assetcurde/assetcurde.component';
import{ HttpModule } from '@angular/http';
import { DoctorinfoComponent } from './doctorinfo/doctorinfo.component';
import { ProductdatabaseComponent } from './productdatabase/productdatabase.component';
import { TestserviceComponent } from './testservice/testservice.component';
import { ActorComponent } from './actor/actor.component';
import { CheckstudentComponent } from './checkstudent/checkstudent.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MediaComponent } from './media/media.component';
import { ActressComponent } from './actress/actress.component';

import { VechileComponent } from './vechile/vechile.component';
import { DoctorformComponent } from './doctorform/doctorform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { FinanceregformComponent } from './financeregform/financeregform.component';
import { PatientdynamicformComponent } from './patientdynamicform/patientdynamicform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Route } from '@angular/router';
import { LangtranslateComponent } from './langtranslate/langtranslate.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    AppComponent,
 CalculatorComponent,
 PotentialComponent,
 ArrayComponent,
 MarksComponent,
 CrudeproductComponent,
 AssetcurdeComponent,
 DoctorinfoComponent,
 ProductdatabaseComponent,
 TestserviceComponent,
 ActorComponent,
 CheckstudentComponent,
 LoginpageComponent,
 MediaComponent,
 ActressComponent,
 VechileComponent,
 DoctorformComponent,
 RegisterformComponent,
 EmpdataComponent,
 FinanceregformComponent,
 PatientdynamicformComponent,
 NavbarComponent,
 LangtranslateComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      { path: 'empdata', component: EmpdataComponent },
      { path: 'actor', component: ActorComponent },
      { path: 'langtranslate', component: LangtranslateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
