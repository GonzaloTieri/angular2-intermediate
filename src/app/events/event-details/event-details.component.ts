import { Component, OnInit } from '@angular/core';
import { EventoService } from 'app/shared/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event : object;
  idEvento : number;

  constructor(private _eventoService : EventoService, private _route:ActivatedRoute) { }
  
  ngOnInit() {
    this.idEvento = +this._route.snapshot.params['id'];
    this.event = this._eventoService.getEvent(this.idEvento);
  }

}
