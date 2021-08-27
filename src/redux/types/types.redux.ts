import {AdministratorState} from './types.administrators';
import {ImmutableObject} from 'seamless-immutable';

export enum BaseDocReducers {
  root = 'reducerBaseDoc',
  administrators = 'administrators',
}

export interface BasedocState {
  [BaseDocReducers.administrators]: AdministratorState;
}

export interface BasedocStateRoot {
  [BaseDocReducers.root]: ImmutableObject<BasedocState>;
}
