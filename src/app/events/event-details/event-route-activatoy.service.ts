import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EventoService } from '../../shared/evento.service';

@Injectable()
export class EventRouteActivatoyService implements CanActivate{

  constructor(private _eventService : EventoService, private _router: Router) { }

  canActivate(route:ActivatedRouteSnapshot){
    const eventExists = !! this._eventService.getEvent(+route.params['id']);
    if(!eventExists){
      this._router.navigate(['/404']);
    }
    return eventExists;
  }
}
