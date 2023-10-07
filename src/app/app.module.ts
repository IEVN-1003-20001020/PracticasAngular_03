import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { PotenciasComponent } from './potencia/potencias/potencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CinepolisComponent } from './cinepolis/cinepolis/cinepolis.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    PotenciasComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
