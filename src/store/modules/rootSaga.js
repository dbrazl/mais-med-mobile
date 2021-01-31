import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';
import pharms from './pharms/saga';
import map from './map/saga';

export default function* rootSaga() {
    return yield all([auth, user, pharms, map]);
}
