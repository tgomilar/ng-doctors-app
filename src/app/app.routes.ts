import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctors', component: DoctorListComponent },
  {
    path: 'doctor/:id',
    component: DoctorDetailComponent,
  },
  { path: 'tasks', component: TaskListComponent },
  { path: 'about', component: AboutComponent },
];
