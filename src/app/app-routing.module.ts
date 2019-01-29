import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowListsComponent } from './components/show-lists/show-lists.component'
import { ShowDetailsComponent } from './components/show-details/show-details.component'


const routes: Routes = [
  { path: '', component: ShowListsComponent },
  { path: 'show/:id/details', component: ShowDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
