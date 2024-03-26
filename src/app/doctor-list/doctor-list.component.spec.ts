import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DoctorListComponent } from './doctor-list.component';

describe('DoctorListComponent', () => {
  let component: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorListComponent, HttpClientTestingModule],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
