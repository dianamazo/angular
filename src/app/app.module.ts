import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerService }  from './logger.service';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { SpyDirective } from './spy.directive';
import { CploopDirective } from './cploop.directive';
import { CpdelayDirective } from './cpdelay.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    SpyDirective,
    CploopDirective,
    CpdelayDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
