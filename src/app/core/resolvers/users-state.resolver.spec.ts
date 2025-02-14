import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userStateResolver } from './users-state.resolver';

describe('userStateResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => userStateResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
