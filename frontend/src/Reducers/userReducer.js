

const initialState = {
    user:{}
}

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {

    case 'SIGN_IN_USER':
        return { ...state,user:payload }

    case 'SIGN_OUT_USER':
        return { ...state, user:{} }

    default:
        return state
    }
}
