export function indexPharmsRequest() {
    return {
        type: '@pharms/INDEX_PHARMS_REQUEST',
    };
}

export function indexPharmsSuccess(data) {
    return {
        type: '@pharms/INDEX_PHARMS_SUCCESS',
        payload: { data },
    };
}

export function pharmsOperationFailure({ error, message }) {
    return {
        type: '@pharms/PHARMS_OPERATION_FAILURE',
        payload: { error, message },
    };
}
