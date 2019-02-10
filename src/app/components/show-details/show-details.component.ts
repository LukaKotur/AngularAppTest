import { Component, OnInit, Input } from "@angular/core";
import { ShowService } from "../../services/show.service";
import { ActivatedRoute } from "@angular/router";
import { ShowDetails } from "src/app/models/ShowDetails";
import { Actor } from "src/app/models/Actor";

@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.scss"]
})
export class ShowDetailsComponent implements OnInit {
  @Input() id: number;
  show: ShowDetails;
  actors: any[];

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
    this.actors = [];
    this.show.credits.cast.forEach(person => {
      this.showService.getActor(person.id).subscribe(actor => {
        this.actors.push(actor);
      });
    });

    console.log(this.show);
    console.log(this.actors);
  }

  getActorImdb(id: number): any {
    if (typeof this.actors.find(x => x.id == id) !== "undefined") {
      return this.actors.find(x => x.id == id).imdb_id;
    }else {
      return "";
    }
  }
}
