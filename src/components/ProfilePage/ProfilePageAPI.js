export const ProfilePageAPI = {

    //Get user by username
    getUserProfile(username) {
        const apiURL = 'https://vue-questionaire.herokuapp.com'
        return fetch(`${apiURL}/translations?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async response => {
            if (!response.ok) {
                throw new Error("request error")
            }
            return response.json()
        })
    },

    //Set user translations to empty array
    deleteUserTranslations(userId){
        const apiURL = 'https://vue-questionaire.herokuapp.com'
        fetch(`${apiURL}/translations/${userId}`, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
                'X-API-Key': 'EdvardsAPIKEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations: []
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not update translations history')
                }
                return response.json()
            })
            .catch(error => {
            })
    }
}
