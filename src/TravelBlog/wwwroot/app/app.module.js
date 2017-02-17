"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
require("rxjs/add/operator/switchMap");
const material_1 = require("@angular/material");
const index_1 = require("./_helpers/index");
const testing_1 = require("@angular/http/testing");
const http_2 = require("@angular/http");
const index_2 = require("./_directives/index");
const index_3 = require("./_guards/index");
const index_4 = require("./_services/index");
const index_5 = require("./login/index");
const index_6 = require("./register/index");
const app_component_1 = require("./app.component");
const toolb_component_1 = require("./Toolbar/toolb.component");
const about_component_1 = require("./About/about.component");
const next_component_1 = require("./next.component");
const fetch_1 = require("./SampleFetch/fetch");
const app_router_1 = require("./app.router");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            material_1.MaterialModule.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_router_1.routes
        ],
        declarations: [
            toolb_component_1.ToolbarComponent,
            about_component_1.AboutComponent,
            next_component_1.NextComponent,
            app_component_1.AppComponent,
            fetch_1.FetchDataComponent,
            index_2.AlertComponent,
            index_5.LoginComponent,
            index_6.RegisterComponent
        ],
        providers: [
            index_3.AuthGuard,
            index_4.AlertService,
            index_4.AuthenticationService,
            index_4.UserService,
            index_1.fakeBackendProvider,
            testing_1.MockBackend,
            http_2.BaseRequestOptions
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
