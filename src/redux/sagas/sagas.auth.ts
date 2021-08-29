import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, put, takeLatest} from 'redux-saga/effects';
import AuthService from '../../data/services/auth';
import {AuthActions, AuthTypes} from './../reducers/reducer.auth';
import {BasedocRequestLogin, User} from './../types/types.auth';
function* makeLogin(action: BasedocRequestLogin) {
  try {
    const {login, password, partner} = action.data;
    const response: User = yield call(AuthService.login, {
      login,
      password,
      partner,
    });

    yield put(AuthActions.basedocSuccessLogin(response));

    yield AsyncStorage.setItem('token', response.token!);
  } catch (error) {
    yield put(AuthActions.basedocFailureLogin(error.message));
  }
}

export default function* root() {
  yield takeLatest(AuthTypes.BASEDOC_REQUEST_LOGIN, makeLogin);
}
