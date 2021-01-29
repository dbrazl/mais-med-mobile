import { takeLatest, all, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { indexPharmsSuccess, pharmsOperationFailure } from './actions';

function* indexPharms() {
    try {
        const response = yield call(api.get, '/pharms');

        yield put(indexPharmsSuccess(response.data));
    } catch (error) {
        put(pharmsOperationFailure(true, 'Sem mensagem'));
    }
}

export default all([takeLatest('@pharms/INDEX_PHARMS_REQUEST', indexPharms)]);
