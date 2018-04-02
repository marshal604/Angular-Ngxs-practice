import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgxsModule} from '@ngxs/store';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoComponent} from './todo/todo.component';
import {TodoState} from './todo/todo.state';
import {SharedModule} from './shared/shared.module';
import {EditDialogComponent} from './todo/edit-dialog/edit-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxsModule.forRoot([TodoState])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent]
})
export class AppModule { }
