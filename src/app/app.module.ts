import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime NG
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';

// Component
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { DatesComponent } from './dates/dates.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, DatesComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, CalendarModule, DividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
