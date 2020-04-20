import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { SuccessComponent } from "./success/success.component";
import { FaqComponent } from "./faq/faq.component";
import { StatsComponent } from "./stats/stats.component";


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'stats', component: StatsComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
