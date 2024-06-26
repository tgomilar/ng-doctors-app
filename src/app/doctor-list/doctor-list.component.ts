import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
  ],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss',
})
export class DoctorListComponent implements AfterViewInit {
  @Input() hideTitle: boolean = false;

  tableHeader: string[] = [
    'name',
    'tasks',
    'email',
    'phone',
    'address',
    'details',
  ];
  doctors: Doctor[] = [];
  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource();
  isTableView: boolean = true;
  viewStyle: string = 'table';
  testDoctors: Doctor[] = [];

  constructor(private doctorService: DoctorService, private router: Router) {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
      this.doctors.forEach((doctor) => {
        this.doctorService.getDoctorTasks(doctor.id).subscribe((tasks) => {
          doctor.tasks = tasks;
        });
      });
      this.dataSource.data = this.doctors;
    });
  }

  @ViewChild(MatSort) sort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  completedTasks(doctor: Doctor): number {
    return doctor.tasks?.filter((task) => task.completed).length;
  }

  uncompletedTasks(doctor: Doctor): number {
    return doctor.tasks?.filter((task) => !task.completed).length;
  }

  onRowClick(doctor: Doctor) {
    this.router.navigate(['doctor/', doctor.id]);
  }

  toggleView(): void {
    this.isTableView = !this.isTableView;
  }
}
