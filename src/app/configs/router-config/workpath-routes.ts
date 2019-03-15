
import { Routes } from '@angular/router';
import { WorkpathDashboardComponent } from 'src/app/components/workpath/workpath-dashboard/workpath-dashboard.component';
import { WorkpathRobotsComponent } from 'src/app/components/workpath/workpath-robots/workpath-robots.component';

export const WorkPathRoutes: Routes = [
    {
        path: '',
        component: WorkpathDashboardComponent,
        pathMatch: 'full'
    },    
    {
        path: 'robots',
        component: WorkpathRobotsComponent
    },
    {
        path: '**',
        component: WorkpathDashboardComponent
    }
];
