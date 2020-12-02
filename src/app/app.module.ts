import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { WakeupSettingsComponent } from './wakeup-settings/wakeup-settings.component';
import { WakeupShowPresetsComponent } from './wakeup-show-presets/wakeup-show-presets.component';
import { WakeupShowSingleComponent } from './wakeup-show-single/wakeup-show-single.component';
import { AppRoutingModule } from './app-routing.module';
import { WakeupDashboardComponent } from './wakeup-dashboard/wakeup-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WakeupSettingsComponent,
    WakeupShowPresetsComponent,
    WakeupShowSingleComponent,
    WakeupDashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
