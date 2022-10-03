import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Modules
import { ComponentsModule} from './components/components.module';
import { PagesModule } from './pages/pages.module';
// Components
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
// Routing 
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
