import {Action} from 'redux';
import {ImmutableObject} from 'seamless-immutable';

export interface User {
  entityCode: string;
  name: string;
  internalCode?: string;
  urlPhoto?: string;
  entityType: string;
  entityTypeName: string;
  administratorName: string;
  administratorCode: string;
  token?: string;
}

export interface AuthActionTypes {
  BASEDOC_REQUEST_LOGIN: string;
  BASEDOC_SUCCESS_LOGIN: string;
  BASEDOC_FAILURE_LOGIN: string;

  RESET: string;
}

export interface State {
  user: User | undefined;
  loading: boolean;
  error: string | null;
}

export type AuthState = ImmutableObject<State>;

export interface BasedocRequestLoginParams {
  login: string;
  password: string;
  partner: string;
}

export interface BasedocRequestLogin extends Action<AuthActionTypes> {
  data: BasedocRequestLoginParams;
}

export interface BasedocSuccessLogin extends Action<AuthActionTypes> {
  user: User;
}

export interface BasedocFailureLogin extends Action<AuthActionTypes> {
  error: string | null;
}

export interface CreatorTypes {
  basedocRequestLogin(data: BasedocRequestLoginParams): BasedocRequestLogin;
  basedocSuccessLogin(user: User): BasedocSuccessLogin;
  basedocFailureLogin(error: string | null): BasedocFailureLogin;
}

export type ReducerTypes = BasedocRequestLogin &
  BasedocSuccessLogin &
  BasedocFailureLogin;
