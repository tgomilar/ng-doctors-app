import { Component } from '@angular/core';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DoctorListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
