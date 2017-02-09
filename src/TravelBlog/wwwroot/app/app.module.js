"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const material_1 = require("@angular/material");
const app_component_1 = require("./app.component");
const toolb_component_1 = require("./toolb.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [material_1.MaterialModule.forRoot(), platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, toolb_component_1.ToolbarComponent],
        bootstrap: [app_component_1.AppComponent, toolb_component_1.ToolbarComponent]
    })
], AppModule);
exports.AppModule = AppModule;
