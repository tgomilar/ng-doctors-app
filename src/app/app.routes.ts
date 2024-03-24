import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctors', component: DoctorListComponent, title: 'List of Doctors' },
  {
    path: 'doctor/:id',
    component: DoctorDetailComponent,
    title: 'Doctor`s Tasks and Details',
  },
  { path: 'about', component: AboutComponent, title: 'About' },
];
