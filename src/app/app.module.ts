import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, SidebarComponent} from './modules';
import { HomeModule } from './modules/home/home.module';
import { ProductCardComponent } from './modules/home/components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from './modules/layout/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

