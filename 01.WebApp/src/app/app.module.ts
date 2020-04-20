import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SuccessComponent } from './success/success.component';
import { FaqComponent } from './faq/faq.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'stats', component: StatsComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SuccessComponent,
    FaqComponent,
    StatsComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
