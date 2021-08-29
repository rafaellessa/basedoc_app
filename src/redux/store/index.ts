import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import redux from '..';
import ReactotronConfig from '../../../ReactoTron';
import rootSaga from './../sagas/sagas.administrators';

const sagaMonitor = ReactotronConfig.createSagaMonitor?.();
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const composer = compose(
  applyMiddleware(sagaMiddleware),
  ReactotronConfig.createEnhancer(),
);

const store = createStore(redux.reducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
