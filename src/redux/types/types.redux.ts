import {AuthState} from './types.auth';
import {ImmutableObject} from 'seamless-immutable';
import {AdministratorState} from './types.administrators';

export enum BaseDocReducers {
  root = 'value',
  administrators = 'administrators',
  auth = 'auth',
}

export interface BasedocState {
  [BaseDocReducers.administrators]: AdministratorState;
  [BaseDocReducers.auth]: AuthState;
}

export interface BasedocStateRoot {
  [BaseDocReducers.root]: ImmutableObject<BasedocState>;
}
