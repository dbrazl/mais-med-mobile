import { takeLatest, put, call, all, race } from 'redux-saga/effects';

import api from '../../../services/api';

import {
    signInSuccess,
    signFailure,
    restoreAccountSuccess,
    signUpSuccess,
} from './actions';

import { timer } from '../../utils';

export function* signIn({ payload }) {
    try {
        const { username, password } = payload;

        const { response } = yield race({
            response: call(api.post, 'session', {
                username,
                password,
            }),
            timer,
        });

        const { token, user } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));
    } catch (error) {
        const errorMessage = error.message;
        yield put(signFailure(errorMessage));
    }
}

export function* signUp({ payload }) {
    try {
        const { username, email, password, personality } = payload;

        yield race({
            response: call(api.post, 'user', {
                username,
                email,
                password,
                personality,
            }),
            timer,
        });

        yield put(signUpSuccess());
    } catch (err) {
        // eslint-disable-next-line no-underscore-dangle
        const error = JSON.parse(err.response.request._response);
        yield put(signFailure(error.error));
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function* restoreAccount({ payload }) {
    try {
        const { email } = payload;

        yield race({
            response: yield call(api.put, 'user/restore', {
                email,
            }),
            timer,
        });

        yield put(restoreAccountSuccess());
    } catch (err) {
        // eslint-disable-next-line no-underscore-dangle
        const error = JSON.parse(err.response.request._response);
        yield put(signFailure(error.error));
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/RESTORE_ACCOUNT_REQUEST', restoreAccount),
]);
