import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }              from './app.routing';
import { ChartModule } from 'angular2-highcharts';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { FooterComponent }   from './footer.component';
import { PageHeaderComponent }   from './page-header.component';
import { PageHeaderMenuComponent }   from './page-header-menu.component';
import { PageHeaderTopbarComponent }   from './page-header-topbar.component';
import { PageMiddleComponent }   from './page-middle.component';
import { DashboardComponent }   from './dashboard.component';
import { EmployeeTrackingComponent }   from './employee-tracking.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ChartModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    PageHeaderComponent,
    PageHeaderMenuComponent,
    PageHeaderTopbarComponent,
    PageMiddleComponent,
    DashboardComponent,
    EmployeeTrackingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
