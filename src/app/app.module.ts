import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugListComponent } from './components/bug-list/bug-list.component';
import {FormsModule} from "@angular/forms";
import { SpiderComponent } from './components/spider/spider.component';
import { SpiderWebComponent } from './components/spider-web/spider-web.component';

@NgModule({
  declarations: [
    AppComponent,
    BugListComponent,
    SpiderComponent,
    SpiderWebComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
