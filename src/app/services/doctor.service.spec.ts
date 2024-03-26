import { TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Doctor } from '../models/doctor';
import { firstValueFrom } from 'rxjs';

// https://angular.dev/guide/http/testing

describe('DoctorService', () => {
  let httpTestingController: HttpTestingController;
  let service: DoctorService;
  const apiUrl = 'https://jsonplaceholder.typicode.com';
  const expectedDoctors = [
    {
      id: 101,
      name: 'Dr. Emily Test',
      username: 'drtest',
      email: 'drtest@example.com',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '555-1234-567',
      website: 'drtest.org',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
      tasks: [],
    },
  ];
  const expectedTasks = [
    {
      userId: 101,
      id: 1,
      title: 'Task 1',
      completed: false,
      doctor: {},
    },
    {
      userId: 101,
      id: 2,
      title: 'Task 2',
      completed: true,
      doctor: {},
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getDoctors should return expected doctors', async () => {
    // Trigger the HTTP request
    const doctors$ = service.getDoctors();

    // Use firstValueFrom to convert the Observable to a Promise
    const doctorsPromise = firstValueFrom(doctors$);

    // Expect that a request has been made and respond with mock data
    const req = httpTestingController.expectOne(`${apiUrl}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedDoctors);

    // Verify that the response matches the expected data
    expect(await doctorsPromise).toEqual(expectedDoctors);

    // Ensure no other requests are made
    httpTestingController.verify();
  });

  it('getDoctorById should return the expected doctor data based on doctor`s id', async () => {
    const doctor$ = service.getDoctorById(expectedDoctors[0].id);
    const doctorPromise = firstValueFrom(doctor$);
    const req = httpTestingController.expectOne(
      `${apiUrl}/users/${expectedDoctors[0].id}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(expectedDoctors[0]);

    expect(await doctorPromise).toEqual(expectedDoctors[0]);

    httpTestingController.verify();
  });

  it('getTasks should return expected tasks', async () => {
    const tasks$ = service.getTasks();
    const tasksPromise = firstValueFrom(tasks$);
    const req = httpTestingController.expectOne(`${apiUrl}/todos`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedTasks);

    expect(await tasksPromise).toEqual(expectedTasks);

    httpTestingController.verify();
  });

  it('getDoctorTasks should return expected tasks for a specific doctor`s id', async () => {
    const doctorId = expectedDoctors[0].id;
    const tasks$ = service.getDoctorTasks(doctorId);
    const tasksPromise = firstValueFrom(tasks$);
    const req = httpTestingController.expectOne(
      `${apiUrl}/users/${doctorId}/todos`
    );
    expect(req.request.method).toBe('GET');
    req.flush(expectedTasks);

    expect(await tasksPromise).toEqual(expectedTasks);

    httpTestingController.verify();
  });

  it('calculateCompletionPercentage should return the correct percentage string based on integer inputs', () => {
    expect(service.calculateCompletionPercentage(0, 0)).toBe('0%');
    expect(service.calculateCompletionPercentage(1, 2)).toBe('50%');
    expect(service.calculateCompletionPercentage(2, 2)).toBe('100%');
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
