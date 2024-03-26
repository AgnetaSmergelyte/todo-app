import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

import { FormsModule } from "@angular/forms";
import { NgIconsModule } from '@ng-icons/core';
import { heroTrash, heroPencilSquare, heroPencil, heroClipboardDocumentList, heroClipboardDocumentCheck, heroCheck, heroCheckCircle } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIconsModule.withIcons({ heroTrash, heroPencilSquare, heroPencil, heroClipboardDocumentList, heroClipboardDocumentCheck, heroCheck, heroCheckCircle }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
