export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_MUSIC':
            return { ...state, latestMusic: action.payload };
      
        default:
            return state;
    }
}

