import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SearchByNamePipe } from './search-by-name.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    // SearchByNamePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
