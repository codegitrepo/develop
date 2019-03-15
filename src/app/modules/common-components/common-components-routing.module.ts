import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { WorkPathRoutes } from 'src/app/configs/router-config/workpath-routes';

WorkPathRoutes
@NgModule({
  imports: [RouterModule.forRoot(WorkPathRoutes)],
  exports: [RouterModule]
})
export class CommonComponentsRoutingModule { }
