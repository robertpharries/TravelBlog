import { Component } from '@angular/core';

@Component({
    selector: 'my-tb',
    template: `
<md-sidenav-layout fullscreen>

  <md-sidenav #start mode="over">
asdfasdfasdfasdf
  </md-sidenav>

  <md-toolbar>
    <button md-button style="min-width: 42px; min-height: 36px; padding: 0;" (click)="start.toggle()"><i class="material-icons">menu</i></button>
    <span style="flex: 1 1 auto; text-align: center;">ROFL</span>
    <span class="demo-fill-remaining"></span>
  </md-toolbar>

</md-sidenav-layout>

`
})
export class ToolbarComponent {

}