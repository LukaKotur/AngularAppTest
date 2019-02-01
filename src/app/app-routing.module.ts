import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowListsComponent } from "./components/show-lists/show-lists.component";
import { ShowDetailsComponent } from "./components/show-details/show-details.component";

import { ShowResolver } from "./services/show-resolver.service";
import { ShowSearchResultsComponent } from "./components/show-search-results/show-search-results.component";

const routes: Routes = [
  { path: "", component: ShowListsComponent },
  {
    path: "show/:id/details",
    component: ShowDetailsComponent,
    pathMatch: "full",
    resolve: { show: ShowResolver }
  },
  { path: "findshow", component: ShowSearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
