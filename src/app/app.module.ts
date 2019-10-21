import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoheaderComponent } from './todo/todoheader/todoheader.component';
import { TodofooterComponent } from './todo/todofooter/todofooter.component';
import { TodoinputComponent } from './todo/todoinput/todoinput.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { DataService } from './todo/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatCardModule, MatRadioModule, MatTabsModule, MatGridListModule, MatListModule, MatBadgeModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoheaderComponent,
    TodofooterComponent,
    TodoinputComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatBadgeModule,
    MatCheckboxModule,
    DragDropModule
  ],
  providers: [DataService,TodofooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
