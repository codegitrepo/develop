import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './modules/common-components/common-components.module';
import { WorkpathComponentsModule } from './modules/workpath-components/workpath-components.module';
import { CommonComponentsRoutingModule } from './modules/common-components/common-components-routing.module';


@NgModule({
  declarations: [
    AppComponent,
               
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsRoutingModule,
    CommonComponentsModule,
    WorkpathComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
