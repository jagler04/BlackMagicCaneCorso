import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule,
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule,
  MatSelectModule,
  MatRadioModule,
  MatDialogModule } from '@angular/material';
import { SiteDashboardComponent } from './site-dashboard/site-dashboard.component';
import { SiteTableComponent } from './site-table/site-table.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavService } from './nav.service';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MalesComponent } from './males/males.component';
import { FemalesComponent } from './females/females.component';
import { DogInfoComponent } from './dog-info/dog-info.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BreedStandardComponent } from './breed-standard/breed-standard.component';
import { PuppyApplicationComponent } from './puppy-application/puppy-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PuppiesService } from './Services/puppies.service';
import { PuppiesClient } from './Clients/PuppiesClient';
import { HttpClientModule } from '@angular/common/http'; 

const appRoutes: Routes = [
  { path: "", component: HomeDetailComponent },
  { path: "home", component: HomeDetailComponent },
  { path: "puppies", component: PuppiesComponent },
  { path: "males", component: MalesComponent },
  { path: "males/:Name", component: MalesComponent },
  { path: "females", component: FemalesComponent },
  { path: "females/:Name", component: FemalesComponent },
  { path: "breed", component: BreedStandardComponent },
  { path: "about", component: AboutUsComponent },
  { path: "application", component: PuppyApplicationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeDetailComponent,
    PageNotFoundComponent,
    SiteDashboardComponent,
    SiteTableComponent,
    PuppiesComponent,
    TopNavComponent,
    MenuListItemComponent,
    MalesComponent,
    FemalesComponent,
    DogInfoComponent,
    ImageDialogComponent,
    AboutUsComponent,
    BreedStandardComponent,
    PuppyApplicationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true }  <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NavService, PuppiesService, PuppiesClient],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent]
})
export class AppModule { }
