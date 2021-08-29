import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
  AdministratorActionTypes,
  AdministratorState,
  ReducerTypes,
} from '../types/types.administrators';
import {BaseDocReducers} from '../types/types.redux';
import {CreatorTypes} from './../types/types.administrators';

const {Types, Creators} = createActions<AdministratorActionTypes, CreatorTypes>(
  {
    basedocRequestGetAllAdministrators: [],
    basedocSuccessGetAllAdministrators: ['administrators'],
    basedocFailureGetAllAdministrators: ['error'],
    reset: null,
  },
  {
    prefix: `${BaseDocReducers.root}/${BaseDocReducers.administrators}`,
  },
);

const INITIAL_STATE: AdministratorState = Immutable({
  administrators: [],
  loading: false,
  error: null,
});

export const reducer = createReducer<AdministratorState, ReducerTypes>(
  INITIAL_STATE,
  {
    [Types.BASEDOC_REQUEST_GET_ALL_ADMINISTRATORS]: state => {
      return state.merge({
        loading: true,
        error: null,
      });
    },
    [Types.BASEDOC_SUCCESS_GET_ALL_ADMINISTRATORS]: (state, action) => {
      return state.merge({
        loading: false,
        administrators: action.administrators,
        error: null,
      });
    },
    [Types.BASEDOC_FAILURE_GET_ALL_ADMINISTRATORS]: (state, action) => {
      return state.merge({
        loading: false,
        error: action.error,
      });
    },
    [Types.RESET]: () => INITIAL_STATE,
  },
);

export const AdministratorActions = Creators;
export const AdministratorTypes = Types;
