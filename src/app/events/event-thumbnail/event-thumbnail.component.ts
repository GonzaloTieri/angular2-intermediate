import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }
  @Input() evento:any;
  @Output() eventClick = new EventEmitter();
  

  ngOnInit() {
    
  }

  handleClickMe(): void {
    this.eventClick.emit('UnString');
  }

  getStartTimeStyle() : string {
    var resp : string = '';
    if (this.evento && this.evento.time === '8:00 am') {
      resp = 'greem, bold';
    }
    return resp;
  }
}
