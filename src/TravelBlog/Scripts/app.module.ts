import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './Toolbar/toolb.component';
import { AboutComponent } from './about.component';
import { NextComponent } from './next.component';
import { routes } from './app.router';

//const appRoutes: Routes = [
//    { path: 'barp', component: ToolbarComponent }
//]
//RouterModule.forRoot(appRoutes)

@NgModule({
    imports: [MaterialModule.forRoot(), BrowserModule, routes],
    declarations: [ToolbarComponent, AboutComponent, NextComponent, AppComponent],
    bootstrap: [ToolbarComponent]
})
export class AppModule { }