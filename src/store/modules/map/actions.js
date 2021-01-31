export function initGeocoding() {
    return {
        type: '@map/INIT_GEOCODING',
    };
}

export function searchAddressRequest(address) {
    return {
        type: '@map/SEARCH_ADDRESS_REQUEST',
        payload: { address },
    };
}

export function searchAddressSuccess(location) {
    return {
        type: '@map/SEARCH_ADDRESS_SUCCESS',
        payload: { location },
    };
}

export function setRegion(latitude, longitude) {
    return {
        type: '@map/SET_REGION',
        payload: { latitude, longitude }
    }
}

export function mapOperationFailure(error, message) {
    return {
        type: '@map/MAP_OPERATION_FAILURE',
        payload: { error, message },
    };
}
