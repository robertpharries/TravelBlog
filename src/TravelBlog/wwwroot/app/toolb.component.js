"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let ToolbarComponent = class ToolbarComponent {
};
ToolbarComponent = __decorate([
    core_1.Component({
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
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;
