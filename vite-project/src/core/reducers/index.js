import { combineReducers } from "redux";
import usersReducer from "../../components/userComponent/userReducer";

const reducer = combineReducers({
    usersReducer,
})

export default reducer