import { SET_NAME,SET_USER_NAME,SET_PASSWORD} from "./actions";

const initialState = {
    name: '',
    userName: '',
    pasword: '',
}

function userReducer(state = initialState, action) {
    switch (action.type){
        case SET_USER_NAME:
            return{...state, userName:action.payload};
         case SET_NAME:
            return{...state, name:action.payload};
        case SET_PASSWORD:
            return{...state, pasword:action.payload};
        default:
            return state;
    }
} 
export default userReducer; 