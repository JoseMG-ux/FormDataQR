import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgQrScannerModule } from 'angular2-qrscanner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { ListDataComponent } from './components/list-data/list-data.component'

import { PersonaldataService } from './services/personaldata.service';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    NgQrScannerModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [PersonaldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
