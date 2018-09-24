import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { PotentialComponent } from './potential/potential.component';
import { MarksComponent } from './marks/marks.component';
import { CrudeproductComponent } from './crudeproduct/crudeproduct.component';
import { AssetcurdeComponent } from './assetcurde/assetcurde.component';
import{ HttpModule } from '@angular/http';
import { DoctorinfoComponent } from './doctorinfo/doctorinfo.component';
import { ProductdatabaseComponent } from './productdatabase/productdatabase.component';
import { ActorComponent } from './actor/actor.component';
import { MediaComponent } from './media/media.component';
import { ActressComponent } from './actress/actress.component';

import { DoctorformComponent } from './doctorform/doctorform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { FinanceregformComponent } from './financeregform/financeregform.component';
import { PatientdynamicformComponent } from './patientdynamicform/patientdynamicform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { LangtranslateComponent } from './langtranslate/langtranslate.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TransselectComponent } from './transselect/transselect.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const appRouter: Routes = [
  { 
    path: 'empdata', component: EmpdataComponent, 
    children: [
      {
        path: 'actor', component: ActorComponent 
      }
    ]
  },
  { 
    path: 'actor', component: ActorComponent 
  },
  {
     path: 'langtranslate', component: LangtranslateComponent 
    }
]

@NgModule({
  declarations: [
    AppComponent,
 CalculatorComponent,
 PotentialComponent,
 MarksComponent,
 CrudeproductComponent,
 AssetcurdeComponent,
 DoctorinfoComponent,
 ProductdatabaseComponent,
 ActorComponent,
 MediaComponent,
 ActressComponent,
 DoctorformComponent,
 RegisterformComponent,
 EmpdataComponent,
 FinanceregformComponent,
 PatientdynamicformComponent,
 NavbarComponent,
 LangtranslateComponent,
 TransselectComponent,
 SidebarComponent
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
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
