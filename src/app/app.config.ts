import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideAnimations(),
    // provideClientHydration(),
    provideHttpClient(withFetch()),
    provideNoopAnimations(),
  ],
};

//    importProvidersFrom(HttpClientModule),
