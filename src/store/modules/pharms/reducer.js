import produce from 'immer';

const INITIAL_STATE = {
    data: [],
    status: {
        loading: false,
    },
    error: {
        status: false,
        message: '',
    },
};

export default function pharms(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@pharms/INDEX_PHARMS_REQUEST':
                draft.status.loading = true;
                draft.error = INITIAL_STATE.error;
                break;

            case '@pharms/INDEX_PHARMS_SUCCESS':
                draft.data = action.payload.data;
                draft.status.loading = false;
                break;

            case '@pharms/PHARMS_OPERATION_FAILURE':
                draft.status.loading = false;
                draft.error.status = action.payload.error;
                draft.error.message = action.payload.message;
                break;

            default:
        }
    });
}
