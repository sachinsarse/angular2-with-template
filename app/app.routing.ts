import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }     from './dashboard.component';
import { EmployeeTrackingComponent }   from './employee-tracking.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
    {
    path: 'employee-tracking',
    component: EmployeeTrackingComponent
  }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

