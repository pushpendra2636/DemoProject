import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { MainCatogryComponent } from './main-catogry/main-catogry.component';
import { DealsComponent } from './deals/deals.component';
import { PproductComponent } from './pproduct/pproduct.component';
import { PUpingComponent } from './p-uping/p-uping.component';
import { CallproductComponent } from './callproduct/callproduct.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SliderComponent,
    MainCatogryComponent,
    DealsComponent,
    PproductComponent,
    PUpingComponent,
    CallproductComponent,
    FooterComponent
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
