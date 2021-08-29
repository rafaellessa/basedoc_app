import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
  AuthActionTypes,
  AuthState,
  CreatorTypes,
  ReducerTypes,
} from './../types/types.auth';
import {BaseDocReducers} from './../types/types.redux';

const {Types, Creators} = createActions<AuthActionTypes, CreatorTypes>(
  {
    basedocRequestLogin: ['data'],
    basedocSuccessLogin: ['user'],
    basedocFailureLogin: ['error'],
    reset: null,
  },
  {
    prefix: `${BaseDocReducers.root}/${BaseDocReducers.auth}/`,
  },
);

const INITIAL_STATE: AuthState = Immutable({
  user: undefined,
  loading: false,
  error: null,
});

export const reducer = createReducer<AuthState, ReducerTypes>(INITIAL_STATE, {
  [Types.BASEDOC_REQUEST_LOGIN]: state => {
    return state.merge({
      loading: true,
      error: null,
    });
  },
  [Types.BASEDOC_SUCCESS_LOGIN]: (state, action) => {
    return state.merge({
      loading: false,
      user: action.user,
      error: null,
    });
  },
  [Types.BASEDOC_FAILURE_LOGIN]: (state, action) => {
    return state.merge({
      loading: false,
      error: action.error,
    });
  },
  [Types.RESET]: () => INITIAL_STATE,
});

export const AuthActions = Creators;
export const AuthTypes = Types;
