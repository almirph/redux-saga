import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
