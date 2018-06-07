import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzBadgeModule, MzProgressModule, MzCollectionModule, MzDropdownModule, MzSidenavModule } from 'ngx-materialize';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzBadgeModule,
    MzProgressModule,
    MzCollectionModule,
    MzDropdownModule,
    MzSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
