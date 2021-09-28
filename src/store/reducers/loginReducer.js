import {ACTION_LOGIN_CHECKFORUSER, ACTION_LOGIN_SELECTEDUSER, ACTION_LOGIN_SETUSER, ACTION_LOGIN_USER } 
from "../actions/loginActions"
// Inital state
const initalState = {
    username: "",
}

//Login Reducer
export const loginReducer = (state = initalState, action) => {
  
    //Switch actions based on what action that will be needed
    switch(action.type){

        case ACTION_LOGIN_USER:
            return{
                ...state,
                username: action.payload,
            }
            
        case ACTION_LOGIN_CHECKFORUSER:
            return{
                ...state,
                username: action.payload,
            }

        case ACTION_LOGIN_SELECTEDUSER:
            return{
                ...state,
                username: action.payload,
            }   
        case ACTION_LOGIN_SETUSER:
            return{
                ...state,
                username: action.payload
            }
        default:
            return state
    }
}