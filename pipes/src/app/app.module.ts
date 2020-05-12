import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SecurizePipe } from './pipes/securize.pipe';

registerLocaleData(localEs, 'es-ES');
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomseguroPipe,
    SecurizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
