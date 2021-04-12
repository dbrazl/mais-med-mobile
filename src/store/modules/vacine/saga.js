import { takeLatest, all, call, put, race, select } from 'redux-saga/effects';
import { timer } from '../../utils';

import api from '../../../services/api';

import {
    getDatesResponse,
    vacineProcedureFailure,
    getSchedulesSuccess,
    getVacinesSuccess,
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

function* getVacines({ payload }) {
    try {
        const { page } = payload;

        const { response } = yield race({
            response: call(api.get, `/vacine?page=${page}`),
            timeout: timer(),
        });

        yield put(getVacinesSuccess(response.data));
    } catch (error) {
        yield put(vacineProcedureFailure(true, error.message));
    }
}

function* storeVacineSchedule() {
    try {
        const cpf = yield select(state => state.vacine.user.rawCPF);
        const date = yield select(state => state.vacine.preferences.date);
        const schedule = yield select(
            state => state.vacine.preferences.schedule
        );

        const { response } = yield race({
            response: call(api.post, `/vacine`, { cpf, date, schedule }),
            timeout: timer(),
        });

        yield put(getVacinesSuccess(response.data));
    } catch (error) {
        yield put(vacineProcedureFailure(true, error.message));
    }
}

export default all([
    takeLatest('@vacine/GET_DATES_REQUEST', getDates),
    takeLatest('@vacine/GET_SCHEDULES_REQUEST', getSchedules),
    takeLatest('@vacine/GET_VACINES_REQUEST', getVacines),
    takeLatest('@vacine/SET_SCHEDULE_PREFERENCE', storeVacineSchedule),
]);
