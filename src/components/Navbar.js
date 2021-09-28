import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {loginCheckForUserAction} from "../store/actions/loginActions";
import {useEffect, useState} from "react";

export const Navbar = () => {

    const history = useHistory()
    const state = useSelector(state => state)
    const [username, setUsername] = useState(state.loginReducer.username)

    let isLoggedIn = false
    console.log(username == "")
    if(username == ""){
        console.log("bbbb")
        isLoggedIn =  false;
    }else{
        console.log("aaaa")
            isLoggedIn = true
    }


    useEffect(()=>{
    }, [])


    const goToProfile = () =>{
        history.push("/profile")
    }

    const goToTranslation = () =>{
        history.push("/translation")
    }
    return (

        <div class="topnav">
            {isLoggedIn ? (
                <div>
                    <button onClick={goToTranslation} className={"navbarbutton"}> Translate</button>
                    <button onClick={goToProfile} className={"navbarbutton"}> Profile</button>
                </div>

            ) : (
                <div></div>
            )}
        </div>
    )
}


export default Navbar