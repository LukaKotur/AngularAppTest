import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/Show'
import { ShowService } from '../../services/show.service'

@Component({
  selector: 'app-show-lists',
  templateUrl: './show-lists.component.html',
  styleUrls: ['./show-lists.component.scss']
})
export class ShowListsComponent implements OnInit {
  shows: Show[];

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getShows().subscribe(shows => {
      console.log(shows);
      this.shows = shows.results;
    })
  }
}
