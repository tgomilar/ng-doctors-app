import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor';
import { Task } from '../models/task';
import { ActivatedRoute } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-doctor-detail',
  standalone: true,
  imports: [RouterModule, MatDividerModule, MatIconModule, MatListModule],
  templateUrl: './doctor-detail.component.html',
  styleUrl: './doctor-detail.component.scss',
})
export class DoctorDetailComponent {
  doctor: Doctor = {} as Doctor;
  tasks: Task[] = [];
  completedTasks: Task[] = [];
  uncompletedTasks: Task[] = [];
  completedTasksPercentage: string = '';
  uncompletedTasksPercentage: string = '';
  randomEmoji: string = '';
  doctorEmojis: string[] = [
    '👨‍⚕️',
    '👩‍⚕️',
    '👨🏻‍⚕️',
    '👩🏻‍⚕️',
    '👨🏼‍⚕️',
    '👩🏼‍⚕️',
    '👨🏽‍⚕️',
    '👩🏽‍⚕️',
    '👨🏾‍⚕️',
    '👩🏾‍⚕️',
    '👨🏿‍⚕️',
    '👩🏿‍⚕️',
  ];

  constructor(
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.doctorService.getDoctorById(parseInt(id)).subscribe((doctor) => {
        this.doctor = doctor;
      });
      this.doctorService.getDoctorTasks(parseInt(id)).subscribe((tasks) => {
        this.tasks = tasks;
        this.completedTasks = this.tasks.filter((task) => task.completed);
        this.uncompletedTasks = this.tasks.filter((task) => !task.completed);
        this.completedTasksPercentage =
          this.doctorService.calculateCompletionPercentage(
            this.completedTasks.length,
            this.tasks.length
          );
        this.uncompletedTasksPercentage =
          this.doctorService.calculateCompletionPercentage(
            this.uncompletedTasks.length,
            this.tasks.length
          );
      });
    }
    this.randomEmoji = this.getRandomDoctorEmoji();
  }

  getRandomDoctorEmoji(): string {
    const randomIndex = Math.floor(Math.random() * this.doctorEmojis.length);
    return this.doctorEmojis[randomIndex];
  }
}
