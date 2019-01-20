import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SamanderComponent } from './samander/samander.component';
import { SafePipe  } from './samander/samander.component';


@NgModule({
  declarations: [AppComponent, SamanderComponent, SafePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // entryComponents : [ButtonComponent],
  providers: [],
  bootstrap : [AppComponent]
})
export class AppModule {
  // constructor (private injector: Injector ) {
  //   const customButton = createCustomElement(ButtonComponent, { injector });
  //   customElements.define('custom-button', customButton);
  // }
  // ngDoBootstrap() {}
}
