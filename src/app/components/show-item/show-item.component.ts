import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../models/Show';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {

  @Input() show: Show;

  constructor() { }

  ngOnInit() {
  }

}
