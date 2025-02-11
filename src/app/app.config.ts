import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { withPreloading } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { NoPreloading } from '@angular/router';
import { FlagBasedPreloadingStrategyService } from './flag-based-preloading-strategy.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withPreloading(FlagBasedPreloadingStrategyService)), provideClientHydration(withEventReplay()),provideHttpClient(), ReactiveFormsModule,
  
   ]
};
