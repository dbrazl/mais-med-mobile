import { all, takeLatest, call, put, race, delay } from 'redux-saga/effects';

import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

import { timer } from '../../utils';

export function* updateProfile({ payload }) {
    try {
        const {
            username,
            name,
            email,
            avatar_id,
            personality,
            ...rest
        } = payload.data;

        const profile = {
            username,
            name,
            email,
            avatar_id,
            personality,
            ...(rest.oldPassword ? rest : {}),
        };

        const { response } = yield race({
            response: call(api.put, 'user', profile),
            timer,
        });

        yield put(updateProfileSuccess(response.data));
    } catch (error) {
        yield put(updateProfileFailure('Error ao fazer o update'));
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
