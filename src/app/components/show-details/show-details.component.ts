import { Component, OnInit, Input } from "@angular/core";
import { ShowService } from "../../services/show.service";
import { Show } from "src/app/models/Show";
import { ActivatedRoute } from "@angular/router";
import { ShowDetails } from "src/app/models/ShowDetails";

@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.scss"]
})
export class ShowDetailsComponent implements OnInit {
  @Input() id: number;
  show: ShowDetails;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService
  ) {}

  ngOnInit() {
    /*Old way, async can't load css image before rendering*/
    // this.route.snapshot.data.subscribe(data => {
    //   this.show = data.show;
    //   console.log("I'm loaded");
    //   console.log(data);
    // });

    this.show = this.route.snapshot.data["show"];
    console.log(this.show);
  }
}
