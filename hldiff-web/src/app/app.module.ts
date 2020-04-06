import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiffComponent } from './diff/diff.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { CodeFragmentComponent } from './code-fragment/code-fragment.component';

@NgModule({
  declarations: [
    AppComponent,
    DiffComponent,
    SourceCodeComponent,
    CodeFragmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
