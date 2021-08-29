import {all} from '@redux-saga/core/effects';
import {Reducer} from 'react';
import {combineReducers} from 'redux';
import {reducer as reducerAdministrators} from './reducers/reducer.administrators';

import sagasAdministrator from './sagas/sagas.administrators';

import {BaseDocReducers} from './types/types.redux';

const baseDocReducers = combineReducers({
  [BaseDocReducers.administrators]: reducerAdministrators,
});

const baseDoceRootSagas = function* rootSagas() {
  return yield all([sagasAdministrator()]);
};

interface BasedocRedux {
  saga: () => void;
  reducer: Reducer<any, any>;
}
const redux: BasedocRedux = {
  saga: baseDoceRootSagas,
  reducer: baseDocReducers,
};

export default redux;
