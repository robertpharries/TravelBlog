"use strict";
const router_1 = require("@angular/router");
const about_component_1 = require("./About/about.component");
const next_component_1 = require("./next.component");
const index_1 = require("./login/index");
const index_2 = require("./register/index");
const index_3 = require("./_guards/index");
exports.router = [
    { path: '', component: about_component_1.AboutComponent, canActivate: [index_3.AuthGuard] },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'next', component: next_component_1.NextComponent, canActivate: [index_3.AuthGuard] },
    { path: '**', redirectTo: '' }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
