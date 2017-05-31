import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import {EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component'

import { EventoService} from './shared/evento.service';
import { EventRouteActivatoyService } from './events/event-details/event-route-activatoy.service';
import { AuthService } from './user/auth.service';

import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from '../routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import {Error404Component} from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventoService, EventRouteActivatoyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
