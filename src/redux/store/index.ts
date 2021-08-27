import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactotronConfig from '../../../ReactoTron';
import {reducer as reducerAdministrators} from '../reducers/reducer.administrators';
