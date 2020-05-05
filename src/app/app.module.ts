import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCustomComponent } from './home-custom/home-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [HomeCustomComponent]
})
export class AppModule { 
  constructor(injector:Injector){
    const customHome=createCustomElement(HomeCustomComponent,{injector});
    customElements.define('home-custom',customHome);
  }
  ngDoBootstrap(){}
}
