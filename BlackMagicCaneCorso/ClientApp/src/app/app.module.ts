import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DogsComponent } from './Pages/dogs/dogs.component';
import { DogCardComponent } from './Controls/dog-card/dog-card.component';
import { ApplyComponent } from './Pages/apply/apply.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionComponent } from './Controls/question/question.component';
import { Client } from './Clients/client'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { PubSubService } from './Services/pub-sub.service';
import {NgxMaterialize} from '@smip/ngx-materialize';
import { EditDogComponent } from './Controls/edit-dog/edit-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogsComponent,
    DogCardComponent,
    ApplyComponent,
    QuestionComponent,
    HomeComponent,
    AboutComponent,
    EditDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaterialize,
    MatInputModule
  ],
    providers: [Client, PubSubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
