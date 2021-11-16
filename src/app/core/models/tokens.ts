import { InjectionToken } from '@angular/core';

export interface Environment {
  production: boolean;
  baseEndpoint: string
}

export const ENVIRONMENT = new InjectionToken<Environment>('environment');
