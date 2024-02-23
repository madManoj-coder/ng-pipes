import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { fileSizePipe } from './shared/pipes/fileSize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    fileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
