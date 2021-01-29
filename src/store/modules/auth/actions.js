export function signInRequest(username, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { username, password },
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    };
}

export function signUpRequest(username, email, password, personality) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { username, email, password, personality },
    };
}

export function signUpSuccess() {
    return {
        type: '@auth/SIGN_UP_SUCCESS',
    };
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT',
    };
}

export function signFailure(errorMessage) {
    return {
        type: '@auth/SIGN_FAILURE',
        payload: { errorMessage },
    };
}

export function restoreAccountRequest(email) {
    return {
        type: '@auth/RESTORE_ACCOUNT_REQUEST',
        payload: { email },
    };
}

export function restoreAccountSuccess() {
    return {
        type: '@auth/RESTORE_ACCOUNT_SUCCESS',
    };
}
