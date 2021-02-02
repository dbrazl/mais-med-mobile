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

export function indexPharmByMedicineRequest(medicine) {
    return {
        type: '@pharms/INDEX_PHARM_BY_MEDICINE_REQUEST',
        payload: { medicine },
    };
}

export function indexPharmByMedicineSuccess(data) {
    return {
        type: '@pharms/INDEX_PHARM_BY_MEDICINE_SUCCESS',
        payload: { data },
    };
}

export function selectPharm(identifier) {
    return {
        type: '@pharms/SELECT_PHARM',
        payload: { identifier },
    };
}

export function pharmsOperationFailure({ error, message }) {
    return {
        type: '@pharms/PHARMS_OPERATION_FAILURE',
        payload: { error, message },
    };
}
