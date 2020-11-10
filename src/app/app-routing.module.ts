import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {WakeupSettingsComponent} from './wakeup-settings/wakeup-settings.component';
import {WakeupShowPresetsComponent} from './wakeup-show-presets/wakeup-show-presets.component';
import {WakeupShowSingleComponent} from './wakeup-show-single/wakeup-show-single.component';
import {RouterModule, Routes} from '@angular/router';
import {WakeupDashboardComponent} from './wakeup-dashboard/wakeup-dashboard.component';

const routes: Routes = [
  {path: 'showSingle', component: WakeupShowSingleComponent},
  {path: 'showDashboard', component: WakeupDashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
