import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

import { FormsModule } from "@angular/forms";
import { NgIconsModule } from '@ng-icons/core';
import { heroTrash, heroPencilSquare, heroPencil, heroClipboardDocumentList, heroClipboardDocumentCheck, heroCheck, heroCheckCircle } from '@ng-icons/heroicons/outline';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIconsModule.withIcons({ heroTrash, heroPencilSquare, heroPencil, heroClipboardDocumentList, heroClipboardDocumentCheck, heroCheck, heroCheckCircle }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
