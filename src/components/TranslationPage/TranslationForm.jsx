import {useEffect, useState} from "react";
import {TranslationAPI} from "./TranslationAPI"
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {ProfilePageAPI} from "../ProfilePage/ProfilePageAPI";


//WHILE developing we encountered a lot of weird problems with redux
//If we had more time we would have rewritten this component, and removed redux :/

function TranslationForm() {
    const history = useHistory()
    const state = useSelector(state => state)
    //Using loginReducer to set username to be the username provided by redux.
    const [username, setUsername] = useState(state.loginReducer.username)
    useEffect(()=>{

        if(state.loginReducer.username == ""){
            history.push("/")
        }
    }, [])


    const [input, setInput] = useState("")
    const [signs, setSigns] = useState([])
    const [translations, setTranslations] = useState([])

    //This value is for debugging reasons
    let t = "";

    //Handles input
    const handleTextInput = evt => {
        t = document.getElementById("input").value;
        setInput(t)
    }

    //On submit, this function will translate the word into sign language and push the new translations to the api.
    const handleSubmit = async evt =>{
        evt.preventDefault();
        let value = document.getElementById("input").value
        let newSigns = []
        for (let i = 0; i < value.length; i++) {
            newSigns.push(value[i])
        }
        setSigns(newSigns)
        console.log(username)
        await updateTranslations()
    }

    //Helper function to fetch Translations
   const getTranslations = async () => {
        let response = await TranslationAPI.getUserProfile(username)
        //setTranslations(response[0].translations)
       return response[0]

    }

    //Function for updating translations
    const updateTranslations = async () => {
        let {
            id,
            translations,
        } = await getTranslations()
        console.log(id+ " " + translations )
        let t = translations
        t.push(input)
        await TranslationAPI.updateTranslation(id, t)

    }


    return (
        <div className="d-flex flex-column">
            <div className="p-2">
                <form className="mt-3" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="input" className="form-label">Text to be translated</label>
                        <input
                            id="input"
                            value={input}
                            type="text"
                            placeholder="Enter text"
                            className="form-control mb-3"
                            onChange={handleTextInput}
                        />
                        <button type='submit' className="btn btn-primary">Translate</button>
                    </div>
                </form>
            </div>
            <div className="p-2">
                {
                    signs.map((element, index) => {
                        console.log(element)
                        return <img src={process.env.PUBLIC_URL + '/individial_signs/' + element + '.png' } />
                    })
                }
            </div>
        </div>
    )
}

export default TranslationForm


