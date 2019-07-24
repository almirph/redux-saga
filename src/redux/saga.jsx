import { actionTypes } from './action';
import { takeLatest, put, all } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* tickTimer(timer) {
  while (timer.counting) {
    yield delay(1000);
    yield put({ type: actionTypes.TICK_SUCCESS });
  }
}

export function* start() {
  try {
    yield put({ type: actionTypes.START_SUCCESS });
  } catch {}
}

export function* stop() {
  try {
    yield put({ type: actionTypes.STOP_SUCCSSES });
  } catch {}
}

export function* timerWatcher() {
  yield takeLatest(actionTypes.TICK, tickTimer);
}

export function* startWatcher() {
  yield takeLatest(actionTypes.START, start);
}

export function* stopWatcher() {
  yield takeLatest(actionTypes.STOP, stop);
}

export default function* rootSaga() {
  yield all([timerWatcher(), startWatcher(), stopWatcher()]);
}
