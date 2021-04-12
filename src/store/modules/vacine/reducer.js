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
            default:
                break;
        }
    });
}
