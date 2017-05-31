import { Component, OnInit } from '@angular/core';
import {EventoService} from 'app/shared/evento.service'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
    styles:['.well {color: green;']
})

export class EventsListComponent implements OnInit {
    events : object[];
    
   constructor(private _events: EventoService ){}
    handleClickMeFather($data) {
        console.log('recived: ', $data);
    }
    ngOnInit(){
        this.events = this._events.getEventos();
    }
}