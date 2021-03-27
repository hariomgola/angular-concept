import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { TestComponent } from './test/test.component';
import { LastnamePipe } from './pipe/lastname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DevComponent,
    LastnamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
