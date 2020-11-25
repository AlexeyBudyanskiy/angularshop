import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const RandomString = new InjectionToken<string>('RandomString');

export function GeneratorFactory(take: number): any {
  return (generatorService: GeneratorService): string => generatorService.generate(take);
}
