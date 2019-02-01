import { Component, OnInit } from "@angular/core";
import { Show } from "src/app/models/Show";

@Component({
  selector: "app-show-search-results",
  templateUrl: "./show-search-results.component.html",
  styleUrls: ["./show-search-results.component.scss"]
})
export class ShowSearchResultsComponent implements OnInit {
  shows: Show[];
  loading: boolean;

  constructor() {}

  ngOnInit() {}

  updateResults(shows: Show[]): void {
    this.shows = shows;
    console.log(this.shows)
  }
}
