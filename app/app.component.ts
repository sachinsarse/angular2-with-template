import { Component } from '@angular/core';
declare var QuickSidebar, Layout, App: any;

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
