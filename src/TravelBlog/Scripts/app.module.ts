import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './Toolbar/toolb.component';
import { AboutComponent } from './About/about.component';
import { NextComponent } from './next.component';
import { routes } from './app.router';

@NgModule({
    imports: [MaterialModule.forRoot(), BrowserModule, routes],
    declarations: [ToolbarComponent, AboutComponent, NextComponent, AppComponent],
    bootstrap: [ToolbarComponent]
})
export class AppModule { }