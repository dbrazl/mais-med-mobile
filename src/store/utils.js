import { call, delay } from 'redux-saga/effects';

export function timer(time = 30000) {
    return call(function*() {
        yield delay(time);
        throw { errorMessage: 'TIMEOUT_ERROR' };
    });
}
