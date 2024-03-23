import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-doctor-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './doctor-detail.component.html',
  styleUrl: './doctor-detail.component.scss',
})
export class DoctorDetailComponent {}
