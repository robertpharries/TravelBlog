import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolb.component';

@NgModule({
    imports: [MaterialModule.forRoot(), BrowserModule],
    declarations: [AppComponent, ToolbarComponent],
    bootstrap: [AppComponent, ToolbarComponent]
})
export class AppModule { }