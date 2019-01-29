import { Component, OnInit, Input } from '@angular/core';
import { ShowService } from '../../services/show.service'
import { Show } from 'src/app/models/Show';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  @Input() id: number;
  show: Show;

  constructor(private route: ActivatedRoute, private showService: ShowService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.showService.getShow(this.id).subscribe(show => {
      this.show = show;
    })
  }

}
