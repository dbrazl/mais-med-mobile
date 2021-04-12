export function saveCPF(cpf) {
    return {
        type: '@vacine/SAVE_CPF',
        payload: { cpf },
    };
}
