import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { MatVsTableModule } from 'projects/mat-vs-table/src/lib/mat-vs-table.module';
import { TableDemoComponent } from './table/table-demo';

@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent
  ],
  imports: [
    MatVsTableModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
