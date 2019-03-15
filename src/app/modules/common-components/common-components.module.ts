import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { WorkpathSidebarComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-sidebar/workpath-sidebar.component';
import { WorkpathHeaderComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-header/workpath-header.component';
import { WorkpathFooterComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-footer/workpath-footer.component';
import { WorkpathControlSidebarComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-control-sidebar/workpath-control-sidebar.component';
import { WorkpathTabsComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-tabs/workpath-tabs.component';
import { WorkpathTabComponent } from 'src/app/components/common/ui-layout/workpath-landing/workpath-tab/workpath-tab.component';


@NgModule({
  declarations: [
    WorkpathSidebarComponent,
    WorkpathHeaderComponent,
    WorkpathFooterComponent,
    WorkpathControlSidebarComponent
    
  ],
  imports: [
    CommonModule,
    CommonComponentsRoutingModule,
    FormsModule
  ],
  exports: [
    WorkpathSidebarComponent,
    WorkpathHeaderComponent,
    WorkpathFooterComponent,
    WorkpathControlSidebarComponent   
],
})
export class CommonComponentsModule { }
