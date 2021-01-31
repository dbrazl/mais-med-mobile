import { takeLatest, call, put, all } from 'redux-saga/effects';
import Geocoder from 'react-native-geocoding';
import { API_KEY_MAPS } from '@env';

import { searchAddressSuccess, mapOperationFailure } from './actions';

function initGeocoding() {
    Geocoder.init(API_KEY_MAPS);
}

function* searchAddress({ payload }) {
    try {
        const { address } = payload;
        const response = yield Geocoder.from(address);
        yield put(searchAddressSuccess(response.results[0].geometry.location));
    } catch (error) {
        yield put(mapOperationFailure(true, error.message));
    }
}

export default all([
    takeLatest('@map/INIT_GEOCODING', initGeocoding),
    takeLatest('@map/SEARCH_ADDRESS_REQUEST', searchAddress),
]);
