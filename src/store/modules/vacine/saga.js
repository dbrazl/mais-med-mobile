import { takeLatest, all, call, put, race } from 'redux-saga/effects';
import { timer } from '../../utils';

import api from '../../../services/api';

import {
    getDatesResponse,
    vacineProcedureFailure,
    getSchedulesSuccess,
} from './actions';

function* getDates({ payload }) {
    try {
        const { page } = payload;

        const { response } = yield race({
            response: call(api.get, `/vacine/dates?page=${page}`),
            timeout: timer(),
        });

        yield put(getDatesResponse(response.data));
    } catch (error) {
        yield put(vacineProcedureFailure(true, error.message));
    }
}

function* getSchedules({ payload }) {
    try {
        const { date } = payload;

        const { response } = yield race({
            response: call(api.get, `/vacine/schedules?date=${date}`),
            timeout: timer(),
        });

        yield put(getSchedulesSuccess(response.data));
    } catch (error) {
        yield put(vacineProcedureFailure(true, error.message));
    }
}

export default all([
    takeLatest('@vacine/GET_DATES_REQUEST', getDates),
    takeLatest('@vacine/GET_SCHEDULES_REQUEST', getSchedules),
]);
