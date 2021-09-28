import { LoginAPI } from "../../components/LoginPage/LoginAPI"
import { ACTION_LOGIN_CHECKFORUSER, ACTION_LOGIN_USER, 
        loginUserAction, loginSetUser } from "../actions/loginActions"

export const loginMiddleware = ({ dispatch }) => next => async action => {
    
    next(action)

    //Action type for fetching the specific user
    if (action.type === ACTION_LOGIN_CHECKFORUSER) {
        LoginAPI.getSpecificUser(action.payload)
        .then(username => {
            dispatch(loginSetUser(username))
        })
    }
    // Action type for logging inn new user
    if(action.type === ACTION_LOGIN_USER) {
        LoginAPI.login(action.payload)
        .then(username =>{
            dispatch(loginUserAction(username))
        })
    }
}