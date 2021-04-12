import produce from 'immer';

const INITIAL_STATE = {
    vacine: {
        name: 'Vacina',
        quantity: 0,
    },
    user: {
        cpf: '',
        rawCPF: '',
    },
    preferences: {
        date: '',
        schedule: '',
    },
    dates: [],
    schedules: [],
    error: {
        status: false,
        message: '',
    },
};

export default function vacine(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@vacine/SET_VACINE_DATA':
                draft.vacine.name = action.payload.data.name;
                draft.vacine.quantity = action.payload.data.quantity;
                break;

            case '@vacine/SAVE_CPF':
                draft.user.cpf = action.payload.cpf;
                draft.user.rawCPF = action.payload.cpf.replace(/\D/g, '');
                break;

            case '@vacine/GET_DATES_RESPONSE':
                draft.dates = action.payload.data.map(item => ({
                    label: item,
                }));
                break;

            case '@vacine/SET_DATE_PREFERENCE':
                draft.preferences.date = action.payload.date;
                break;

            case '@vacine/SET_SCHEDULE_PREFERENCE':
                draft.preferences.schedule = action.payload.schedule;
                break;

            case '@vacine/GET_SCHEDULES_SUCCESS':
                draft.schedules = action.payload.data.map(item => ({
                    label: item,
                }));
                break;

            case '@vacine/VACINE_PROCEDURE_FAILURE':
                draft.error.status = action.payload.error;
                draft.error.message = action.payload.message;
                break;

            default:
                break;
        }
    });
}
