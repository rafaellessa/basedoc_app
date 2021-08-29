import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactotronConfig from '../../../ReactoTron';
import {reducer as reducerAdministrator} from '../reducers/reducer.administrators';
import rootSaga from './../sagas/sagas.administrators';

const sagaMonitor = ReactotronConfig.createSagaMonitor?.();
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const composer = compose(
  applyMiddleware(sagaMiddleware),
  ReactotronConfig.createEnhancer(),
);

const store = createStore(
  combineReducers({
    reducerAdministrator,
  }),
  composer,
);

sagaMiddleware.run(rootSaga);

export default store;
