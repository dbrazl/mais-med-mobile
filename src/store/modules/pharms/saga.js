import { takeLatest, all, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import {
    indexPharmsSuccess,
    pharmsOperationFailure,
    indexPharmByMedicineSuccess,
} from './actions';

function* indexPharms() {
    try {
        const response = yield call(api.get, '/pharms');

        yield put(indexPharmsSuccess(response.data));
    } catch (error) {
        yield put(pharmsOperationFailure(true, error.message));
    }
}

function* indexPharmByMedicine({ payload }) {
    try {
        const { medicine } = payload;
        const response = yield call(
            api.get,
            `/pharms/medicine/available/${medicine}`
        );

        yield put(indexPharmByMedicineSuccess(response.data));
    } catch (error) {
        yield put(pharmsOperationFailure(true, error.message));
    }
}

export default all([
    takeLatest('@pharms/INDEX_PHARMS_REQUEST', indexPharms),
    takeLatest('@pharms/INDEX_PHARM_BY_MEDICINE_REQUEST', indexPharmByMedicine),
]);
