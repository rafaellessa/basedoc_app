import {call, put, takeLatest} from 'redux-saga/effects';
import AdministratorService from '../../data/services/administrator';
import {AdministratorTypes} from '../reducers/reducer.administrators';
import {Administrator} from '../types/types.administrators';
import {AdministratorActions} from './../reducers/reducer.administrators';

function* getAllAdministrators() {
  try {
    const response: Administrator[] = yield call(
      AdministratorService.getAdministrators,
    );

    yield put(
      AdministratorActions.basedocSuccessGetAllAdministrators(response),
    );
  } catch (error) {
    yield put(
      AdministratorActions.basedocFailureGetAllAdministrators(error.message),
    );
  }
}

export default function* root() {
  yield takeLatest(
    AdministratorTypes.BASEDOC_REQUEST_GET_ALL_ADMINISTRATORS,
    getAllAdministrators,
  );
}
