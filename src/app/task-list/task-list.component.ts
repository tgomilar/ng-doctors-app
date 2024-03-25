import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { Task } from '../models/task';
import { DoctorService } from '../services/doctor.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() hideTitle: boolean = false;
  tableHeader: string[] = ['id', 'title', 'status', 'doctor', 'details'];
  tasks: Task[] = [];
  doctor: Doctor = {} as Doctor;

  constructor(private doctorService: DoctorService, private router: Router) {
    this.doctorService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.tasks.forEach((task) => {
        this.doctorService.getDoctorById(task.userId).subscribe((doctor) => {
          task.doctor = doctor;
        });
      });
    });
  }

  onRowClick(task: Task) {
    this.router.navigate(['doctor/', task.userId]);
  }
}
