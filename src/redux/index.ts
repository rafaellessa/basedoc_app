import {all} from '@redux-saga/core/effects';
import {Reducer} from 'react';
import {combineReducers} from 'redux';
import {reducer as reducerAdministrators} from './reducers/reducer.administrators';
import {reducer as reducerAuth} from './reducers/reducer.auth';

import sagasAdministrator from './sagas/sagas.administrators';
import sagasAuth from './sagas/sagas.auth';

import {BaseDocReducers} from './types/types.redux';

const baseDocReducers = combineReducers({
  [BaseDocReducers.administrators]: reducerAdministrators,
  [BaseDocReducers.auth]: reducerAuth,
});

export const rootSagas = function* rootSagas(): Generator {
  return yield all([sagasAuth(), sagasAdministrator()]);
};
interface BasedocRedux {
  saga: () => void;
  reducer: Reducer<any, any>;
}
const redux: BasedocRedux = {
  saga: rootSagas,
  reducer: baseDocReducers,
};

export default redux;
