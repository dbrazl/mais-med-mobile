export function setVacineData(data) {
    return {
        type: '@vacine/SET_VACINE_DATA',
        payload: { data },
    };
}

export function saveCPF(cpf) {
    return {
        type: '@vacine/SAVE_CPF',
        payload: { cpf },
    };
}

export function getDatesRequest({ page }) {
    return {
        type: '@vacine/GET_DATES_REQUEST',
        payload: { page },
    };
}

export function getDatesResponse(data) {
    return {
        type: '@vacine/GET_DATES_RESPONSE',
        payload: { data },
    };
}

export function setDatePreference({ date }) {
    return {
        type: '@vacine/SET_DATE_PREFERENCE',
        payload: { date },
    };
}

export function setSchedulePreference({ schedule }) {
    return {
        type: '@vacine/SET_SCHEDULE_PREFERENCE',
        payload: { schedule },
    };
}

export function getSchedulesRequest({ date }) {
    return {
        type: '@vacine/GET_SCHEDULES_REQUEST',
        payload: { date },
    };
}

export function getSchedulesSuccess(data) {
    return {
        type: '@vacine/GET_SCHEDULES_SUCCESS',
        payload: { data },
    };
}

export function vacineProcedureFailure(error, message) {
    return {
        type: '@vacine/VACINE_PROCEDURE_FAILURE',
        payload: { error, message },
    };
}
