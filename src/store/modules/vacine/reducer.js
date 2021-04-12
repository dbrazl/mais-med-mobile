import produce from 'immer';

const INITIAL_STATE = {
    user: {
        cpf: '',
        rawCPF: '',
    },
};

export default function vacine(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@vacine/SAVE_CPF':
                draft.user.cpf = action.payload.cpf;
                draft.user.rawCPF = action.payload.cpf.replace(/\D/g, '');
                break;
            default:
                break;
        }
    });
}
