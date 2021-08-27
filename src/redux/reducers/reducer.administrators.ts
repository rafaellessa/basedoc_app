import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
  AdministratorActionTypes, CreatorTtypes, ReducerTypes
} from '../types/types.administrators';
import { AdministratorState } from './../types/types.administrators';
import { BaseDocReducers } from './../types/types.redux';


const {Types, Creators} = createActions<
  AdministratorActionTypes,
  CreatorTtypes
>({
  basedocRequestGetAllAdministrators: [],
  basedocSuccessGetAllAdministrators: ['administrators'],
  basedocFailureGetAllAdministrators: ['error'],
  reset: null,
},{
  prefix: `${BaseDocReducers.root}/${BaseDocReducers.administrators}`;
});

const INITIAL_STATE: AdministratorState = Immutable({
  administrators: [],
  loading: false,
  error: null
})

export const reducer = createReducer<AdministratorState, ReducerTypes>(
  INITIAL_STATE,
  {
    [Types.BASEDOC_REQUEST_GET_ALL_ADDMINISTRATORS]: (state) => {
      return state.merge({
        loading: true,
        error: null
      })
    },
    [Types.BASEDOC_SUCCESS_GET_ALL_ADDMINISTRATORS]: (state, action) => {
      return state.merge({
        loading: false,
        administrators: action.administrators,
        error: null
      })
    },
    [Types.BASEDOC_FAILURE_GET_ALL_ADDMINISTRATORS]: (state, action) => {
      return state.merge({
        loading: false,
        error: action.error
      })
    },
    [Types.RESET]: () => INITIAL_STATE
  }
)

export const AdministratorActions = Creators
export const AdministratorTypes = Types