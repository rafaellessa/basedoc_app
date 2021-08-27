import {Action} from 'redux';
import {ImmutableObject} from 'seamless-immutable';

export interface Administrator {
  name: string;
  entityCode: string;
  uuid: string;
}

export interface AdministratorActionTypes {
  BASEDOC_REQUEST_GET_ALL_ADDMINISTRATORS: string;
  BASEDOC_SUCCESS_GET_ALL_ADDMINISTRATORS: string;
  BASEDOC_FAILURE_GET_ALL_ADDMINISTRATORS: string;

  RESET: string;
}

export interface State {
  administrators: Administrator[];
  loading: boolean;
  error: string | null;
}

export type AdministratorState = ImmutableObject<State>;

export type BasedocRequestGetAllAdministrators =
  Action<AdministratorActionTypes>;

export interface BasedocSuccessGetAllAdministrators
  extends Action<AdministratorActionTypes> {
  administrators: Administrator[];
}

export interface BasedocFailureGetAllAdministrators
  extends Action<AdministratorActionTypes> {
  error: string | null;
}

export interface CreatorTtypes {
  basedocRequestGetAllAdministrators(): BasedocRequestGetAllAdministrators;
  basedocSuccessGetAllAdministrators(
    administrators: Administrator[],
  ): BasedocSuccessGetAllAdministrators;
  basedocFailureGetAllAdministrators(
    error: string | null,
  ): BasedocFailureGetAllAdministrators;
}

export type ReducerTypes = BasedocRequestGetAllAdministrators &
  BasedocSuccessGetAllAdministrators &
  BasedocFailureGetAllAdministrators;
