import {ImmutableObject} from 'seamless-immutable';
import {AdministratorState} from './types.administrators';

export enum BaseDocReducers {
  root = 'basedoc',
  administrators = 'administrators',
}

export interface BasedocState {
  [BaseDocReducers.administrators]: AdministratorState;
}

export interface BasedocStateRoot {
  [BaseDocReducers.root]: ImmutableObject<BasedocState>;
}
