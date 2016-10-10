import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }              from './app.routing';
import { ChartModule } from 'angular2-highcharts';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { FooterComponent }   from './footer.component';
import { PageHeaderComponent }   from './page-header.component';
import { PageHeaderMenuComponent }   from './page-header-menu.component';
import { PageHeaderTopbarComponent }   from './page-header-topbar.component';
import { PageMiddleComponent }   from './page-middle.component';
import { DashboardComponent }   from './dashboard.component';
import { UserComponent }   from './user.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ChartModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    PageHeaderComponent,
    PageHeaderMenuComponent,
    PageHeaderTopbarComponent,
    PageMiddleComponent,
    DashboardComponent,
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
