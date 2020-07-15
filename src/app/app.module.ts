import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DynamicModule,
   DynamicIoModule, DynamicAttributesModule, DynamicDirectivesModule} from 'ng-dynamic-component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicModule,
    DynamicIoModule,
    DynamicDirectivesModule,
    DynamicAttributesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
