import { LOAD_USERS } from "./userAction"

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USERS:
            return{
                ...state,
                users: action.payload.users,
            }
        default:
            return state
    }
}

export default usersReducer