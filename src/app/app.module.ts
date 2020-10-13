import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlyrModule } from 'ngx-plyr';
import { AppComponent } from './app.component';
import { DashjsComponent } from './dashjs/dashjs.component';


@NgModule({
  declarations: [
    AppComponent,
    DashjsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,

    PlyrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
