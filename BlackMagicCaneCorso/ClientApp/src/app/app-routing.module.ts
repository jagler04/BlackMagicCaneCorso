import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './Pages/dogs/dogs.component';
import { ApplyComponent } from './Pages/apply/apply.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';


const routes: Routes = [
  { path: "dogs/:gender", component: DogsComponent },
  { path: "dogs/:gender/:name", component: DogsComponent },
  { path: "apply", component: ApplyComponent },
  { path: "", component: HomeComponent },
  { path:"about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }