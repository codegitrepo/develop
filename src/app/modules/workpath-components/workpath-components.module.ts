import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkpathComponentsRoutingModule } from './workpath-components-routing.module';
import { WorkpathDashboardComponent } from 'src/app/components/workpath/workpath-dashboard/workpath-dashboard.component';
import { WorkpathRobotsComponent } from 'src/app/components/workpath/workpath-robots/workpath-robots.component';
import { WorkpathEnvironmentsTabComponent } from 'src/app/components/workpath/workpath-robots/workpath-environments-tab/workpath-environments-tab.component';
import { WorkpathRobotsTabComponent } from 'src/app/components/workpath/workpath-robots/workpath-robots-tab/workpath-robots-tab.component';
import { WorkpathTabComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-tab/workpath-tab.component';
import { WorkpathTabsComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-tabs/workpath-tabs.component';

@NgModule({
  declarations: [
    WorkpathDashboardComponent,
    WorkpathRobotsComponent,
    WorkpathEnvironmentsTabComponent,
    WorkpathRobotsTabComponent,
    WorkpathTabsComponent,
    WorkpathTabComponent 
  ],
  imports: [
    CommonModule,
    WorkpathComponentsRoutingModule,
    FormsModule
  ],
  exports: [
    WorkpathDashboardComponent,
    WorkpathRobotsComponent,
    WorkpathEnvironmentsTabComponent,
    WorkpathRobotsTabComponent,
    WorkpathTabsComponent,
    WorkpathTabComponent 
  ]
})
export class WorkpathComponentsModule { }
