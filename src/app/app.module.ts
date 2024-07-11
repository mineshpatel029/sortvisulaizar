import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubbleSortVisualizerComponent } from './bubble-sort-visualizer/bubble-sort-visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortVisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
