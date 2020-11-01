import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoStyleDirective } from './directives/todo-style.directive';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalDirective } from './directives/modal.directive';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { ModalDeleteDirective } from './directives/modal-delete.directive';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AddComponent,
    ErrorComponent,
    TodoComponent,
    TodoStyleDirective,
    SearchPipe,
    SortPipe,
    HomePageComponent,
    ModalDirective,
    ModalDeleteComponent,
    ModalDeleteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [ModalComponent, ModalDeleteComponent], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
