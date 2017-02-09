import { Component } from '@angular/core';

@Component({
    selector: 'my-tb',
    template: `<md-toolbar color="primary">
   <span>:)</span>
<div class="example-sidenav-content">
    <button md-button (click)="sidenav.open()">
      Open sidenav
    </button>
  </div>
  </md-toolbar>

<md-sidenav-container class="example-container">
  <md-sidenav #sidenav class="example-sidenav">
    Jolly good!
  </md-sidenav>

  

</md-sidenav-container>`
})
export class ToolbarComponent {

}