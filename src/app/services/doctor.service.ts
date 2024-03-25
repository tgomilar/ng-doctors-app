import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/users`);
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/users/${id}`);
  }

  getDoctorTasks(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/users/${id}/todos`);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/todos`);
  }

  calculateCompletionPercentage(tasks: number, allTasks: number): string {
    if (allTasks === 0) {
      return '0%';
    }
    const percentage = (tasks / allTasks) * 100;
    return `${percentage.toFixed(0)}%`;
  }
}
