import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HomeComponent,
        HttpClientTestingModule,
        RouterLink,
        RouterModule.forRoot([{ path: '', component: HomeComponent }]),
      ],
      providers: [provideRouter([]), provideAnimations()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a defined title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeDefined();
  });

  it(`should have a defined isHandset`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isHandset).toBeDefined();
  });

  it(`should have a defined currentYear`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.currentYear).toBeDefined();
  });

  it('should navigate to home page on empty path', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);

    router.navigate(['']); // Simulate navigation to the home page
    tick(); // Simulate the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();

    expect(router.url).toBe('/');
    expect(fixture.nativeElement.querySelector('app-home')).not.toBeNull(); // Adjust based on your actual selector
  }));

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Hello, doctors-app'
  //   );
  // });
});
