import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShowListsComponent } from "./components/show-lists/show-lists.component";
import { ShowItemComponent } from "./components/show-item/show-item.component";
import { ShowDetailsComponent } from "./components/show-details/show-details.component";
import { ShowResolver } from "./services/show-resolver.service";
import { HeaderComponent } from './components/layout/header/header.component';
import { FindShowComponent } from './components/find-show/find-show.component';
import { ShowSearchResultsComponent } from './components/show-search-results/show-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowListsComponent,
    ShowItemComponent,
    ShowDetailsComponent,
    HeaderComponent,
    FindShowComponent,
    ShowSearchResultsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ShowResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
