import { Component } from '@angular/core';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DoctorListComponent, TaskListComponent, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
