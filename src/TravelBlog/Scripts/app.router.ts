import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './About/about.component';
import { NextComponent } from './next.component';

export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'about', component: AboutComponent },
    { path: 'next', component: NextComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);