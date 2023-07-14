import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxT3DialogModule } from '@traent/ngx-dialog';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxT3DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
