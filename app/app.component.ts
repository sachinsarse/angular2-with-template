import { Component } from '@angular/core';
declare var QuickSidebar: any;
declare var Layout: any;
declare var App: any;
import 'assets/layouts/global/scripts/quick-sidebar.js';
import 'assets/layouts/layout3/scripts/layout.min.js';
import 'assets/layouts/layout3/scripts/demo.min.js';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  ngOnInit() {
    QuickSidebar.init();
    Layout.init();
    App.init();
  }
}
