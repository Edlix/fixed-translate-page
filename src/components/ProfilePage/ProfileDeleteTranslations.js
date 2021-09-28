import {ProfilePageAPI} from "./ProfilePageAPI";
import {useHistory} from "react-router-dom";

const ProfileDeleteTranslations = (username) => {

    const history = useHistory()

    //Uses a patch request to update the use translations to an empty array
    const deleteTranslations = async () => {
        console.log(username.username)
        let response = await ProfilePageAPI.getUserProfile(username.username)
        let userId = response[0].id
        await ProfilePageAPI.deleteUserTranslations(userId)
        alert("Deleted Translations")
        history.push("/translations")
    }



    return (
        <>
            <button onClick={deleteTranslations}>Delete transactions</button>
        </>
    )
}

export default ProfileDeleteTranslations