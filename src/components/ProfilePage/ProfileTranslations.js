import {ProfilePageAPI} from "./ProfilePageAPI";
import {useEffect, useState} from "react";


const ProfileTranslations = () => {

    const [translations, setTranslations] = useState([])

    //get 10 latest translations
    const getTranslations = async () => {
        console.log()
        let response = await ProfilePageAPI.getUserProfile("dewaldels")
        let t = response[0].translations.slice(-10)
        setTranslations(t)
    }

    return (
        <>
            <h4>Check your translations</h4>
            <ul>
                {translations.map(translation => <li>{translation}</li>)}
            </ul>
        </>
    )
}

export default ProfileTranslations