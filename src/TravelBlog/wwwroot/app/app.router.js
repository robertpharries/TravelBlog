"use strict";
const router_1 = require("@angular/router");
const app_component_1 = require("./app.component");
const about_component_1 = require("./about.component");
const next_component_1 = require("./next.component");
exports.router = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component: app_component_1.AppComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'next', component: next_component_1.NextComponent },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
