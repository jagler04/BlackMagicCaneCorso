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
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  MatFormFieldModule,
  MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { SiteDashboardComponent } from './site-dashboard/site-dashboard.component';
import { SiteTableComponent } from './site-table/site-table.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MalesComponent } from './males/males.component';
import { FemalesComponent } from './females/females.component';
import { DogInfoComponent } from './dog-info/dog-info.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BreedStandardComponent } from './breed-standard/breed-standard.component';
import { PuppyApplicationComponent } from './puppy-application/puppy-application.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogListItemComponent } from './dog-list-item/dog-list-item.component';
import { EditDogDialogComponent } from './edit-dog-dialog/edit-dog-dialog.component';
import { EditPicturesDialogComponent } from './edit-pictures-dialog/edit-pictures-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component'; 

import { AuthenticationService } from './Services/authentication.service';
import { PuppiesService } from './Services/puppies.service';
import { NavService } from './Services/nav.service';
import { PictureService } from './Services/picture.service';

import { PuppiesClient, AuthClient, PictureClient, AnnouncementClient } from './Clients/PuppiesClient';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { AuthGuard } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PubSubService } from './Services/pub-sub.service';
import { AddDogDialogComponent } from './add-dog-dialog/add-dog-dialog.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { EditPictureDialogItemComponent } from './edit-picture-dialog-item/edit-picture-dialog-item.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { AddAnnouncementDialogComponent } from './add-announcement-dialog/add-announcement-dialog.component';
import { AnnouncementService } from './announcement.service';

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
  { path: "EditAnnouncements", component: EditAnnouncementComponent},
  { path: "EditDogList", component: DogListComponent },
  //{ path: "EditDogList", component: DogListComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
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
    PuppyApplicationComponent,
    DogListComponent,
    DogListItemComponent,
    EditDogDialogComponent,
    EditPicturesDialogComponent,
    LoginDialogComponent,
    LoginComponent,
    AddDogDialogComponent,
    YesNoDialogComponent,
    EditPictureDialogItemComponent,
    EditAnnouncementComponent,
    AddAnnouncementDialogComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    NavService,
    PuppiesService,
    PictureService,
    PuppiesClient,
    PictureClient,
    AuthClient,
    AuthenticationService,
    AuthGuard,
    HttpModule,
    PubSubService,
    AnnouncementService,
    AnnouncementClient,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageDialogComponent,
    EditDogDialogComponent,
    EditPicturesDialogComponent,
    AddDogDialogComponent,
    LoginDialogComponent,
    YesNoDialogComponent,
    AddAnnouncementDialogComponent]
})
export class AppModule { }
