import { Routes } from '@angular/router';
import { EventsListComponent }  from 'app/events/events-list.component';
import { EventDetailsComponent }from 'app/events/event-details/event-details.component';
import { CreateEventComponent } from 'app/events/create-event/create-event.component';
import { Error404Component }    from 'app/errors/404.component'
import { EventRouteActivatoyService } from 'app/events/event-details/event-route-activatoy.service'

export const appRoutes : Routes = [
    { path: 'events', component: EventsListComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'event/new', component: CreateEventComponent },
    { path: 'event/:id', component: EventDetailsComponent, 
        canActivate: [EventRouteActivatoyService]
        },
    { path: '404', component: Error404Component},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
    
]