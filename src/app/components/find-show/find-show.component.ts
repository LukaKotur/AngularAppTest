import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core";
import { fromEvent } from "rxjs";
import { map, filter, debounceTime, tap, switchAll } from "rxjs/operators";
import { Show } from "src/app/models/Show";
import { ShowService } from "src/app/services/show.service";

@Component({
  selector: "app-find-show",
  templateUrl: "./find-show.component.html",
  styleUrls: ["./find-show.component.scss"]
})
export class FindShowComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() shows = new EventEmitter<Show>();

  constructor(private showService: ShowService, private el: ElementRef) {}

  ngOnInit() {
    fromEvent(this.el.nativeElement, "keyup")
      .pipe(
        map((e: any) => e.target.value),
        filter(text => text.length > 1),
        debounceTime(500),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.showService.findShow(query)),
        switchAll()
      )
      .subscribe(
        results => {
          this.loading.emit(false);
          this.shows.emit(results);
        },
        err => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}
