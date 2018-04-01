import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgxsModule} from '@ngxs/store';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import {TodoState} from './todo/todo.state';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([TodoState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
