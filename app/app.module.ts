import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FooterComponent }   from './footer.component';
import { PageHeaderComponent }   from './page-header.component';
import { PageHeaderMenuComponent }   from './page-header-menu.component';
import { PageHeaderTopbarComponent }   from './page-header-topbar.component';
import { PageMiddleComponent }   from './page-middle.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    FooterComponent,
    PageHeaderComponent,
    PageHeaderMenuComponent,
    PageHeaderTopbarComponent,
    PageMiddleComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
