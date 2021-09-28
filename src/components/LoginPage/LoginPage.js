import { useState } from "react"
import AppContainer from "../../hoc/AppContainer"
import { useDispatch, useSelector, } from "react-redux"
import { loginCheckForUserAction, loginUserAction } from "../../store/actions/loginActions"
import {useHistory} from "react-router-dom";
import { loginReducer } from "../../store/reducers/loginReducer";
import Navbar from "../Navbar";


const LoginPage = () => {
    
    const dispatch = useDispatch()
    //const user = useSelector(state => state.user)
    const history = useHistory()
    const usernames = useSelector(state => state.username)

    //UseState
    const [user, setUser] = useState({
        username: "",
        translations: []
    })
    
    // This is the event change for new user
    const onInputChange = event => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }
    //This is the event change for existing user
    const onInputChangeUser = event => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }
    //This is the submit for the new user
     const  onFormSubmit = event => {
        event.preventDefault()
        //dispatch(loginCheckForUserAction(user.username))
        dispatch(loginUserAction(user))
        history.push('/translation')
    }
    //This is the submit for the existing user
    const  onFormSubmitE = event => {
        event.preventDefault()
        dispatch(loginCheckForUserAction(user.username))
        //dispatch(loginUserAction(user))
        history.push('/translation')
    }
   
    return (
        <div>
            <Navbar/>
            <AppContainer>

                <main className="LoginPage">

                    <form className="mt-3" onSubmit={ onFormSubmit}>
                        <h1>Login to Translate Sign Language</h1>
                        {
                            user &&
                            <p>{user.username}</p>&&
                            usernames &&
                            <p>{usernames.username}</p>

                        }
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input id="username" type="text" placeholder="Enter username"
                                   className="form-control" onChange={ onInputChange } />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">Login new user</button>
                    </form>
                    <form className="mt-3 1" onSubmit={onFormSubmitE}>
                        <div className="mb-3">
                            <label htmlFor="usernameNew" className="form-label">Existing user</label>
                            <input id="username" type="text" placeholder="Enter your existing username"
                                   className="form-control" onChange={ onInputChangeUser } />
                        </div>
                        <button type="submit1" className="btn1 btn-primary btn-lg">Login existing user</button>

                    </form>
                </main>
            </AppContainer>
        </div>

    )
}

export default LoginPage