import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DoctorDetailComponent } from './doctor-detail.component';
import { provideRouter } from '@angular/router';

describe('DoctorDetailComponent', () => {
  let component: DoctorDetailComponent;
  let fixture: ComponentFixture<DoctorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDetailComponent, HttpClientTestingModule],
      providers: [
        provideAnimations(),
        provideRouter([
          {
            path: 'doctor/:id',
            component: DoctorDetailComponent,
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
