import produce from 'immer';

const INITIAL_STATE = {
    region: {
        latitude: -27.210671,
        longitude: -49.63627,
        latitudeDelta: 0.010166,
        longitudeDelta: 0.00619,
    },
    status: {
        loading: false,
    },
    error: {
        status: false,
        message: '',
    },
};

export default function map(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@map/SEARCH_ADDRESS_REQUEST':
                draft.status.loading = true;
                draft.error = INITIAL_STATE.error;
                break;

            case '@map/SEARCH_ADDRESS_SUCCESS':
                draft.status.loading = false;
                draft.region.latitude = action.payload.location.lat;
                draft.region.longitude = action.payload.location.lng;
                break;

            case '@map/SET_REGION':
                draft.region.latitude = action.payload.latitude;
                draft.region.longitude = action.payload.longitude;
                break;

            case '@map/MAP_OPERATION_FAILURE':
                draft.status.loading = false;
                draft.error.status = action.payload.error;
                draft.error.message = action.payload.message;
                break;

            default:
                break;
        }
    });
}
