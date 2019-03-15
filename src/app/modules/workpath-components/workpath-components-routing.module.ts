import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkPathRoutes } from 'src/app/configs/router-config/workpath-routes';

@NgModule({
  imports: [RouterModule.forChild(WorkPathRoutes)],
  exports: [RouterModule]
})
export class WorkpathComponentsRoutingModule { }
