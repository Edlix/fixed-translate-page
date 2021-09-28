import { useState } from "react"
import AppContainer from "../../hoc/AppContainer"
import { useDispatch, useSelector, } from "react-redux"
import { loginCheckForUserAction, loginUserAction } from "../../store/actions/loginActions"
import {useHistory} from "react-router-dom";

const ProfileLogout = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    //Logs out by setting the username of state to null
    const logout = () => {
        dispatch(loginCheckForUserAction(null))
        history.push('/')

    }

    return (
        <>
            <button onClick={logout}>Log out</button>
        </>
    )
}

export default ProfileLogout