export const ACTION_LOGIN_CHECKFORUSER = '[login] EXISTS'
export const ACTION_LOGIN_USER = '[login] USER'
export const ACTION_LOGIN_SELECTEDUSER = '[login] SELECTEDUSER'
export const ACTION_LOGIN_SETUSER = '[login] SETUSER'

export const loginUserAction = username => ({
    type: ACTION_LOGIN_USER,
    payload: username
})

export const loginCheckForUserAction = username => ({
    type: ACTION_LOGIN_CHECKFORUSER,
    payload: username
})
export const loginSelectedUser = username => ({
    type: ACTION_LOGIN_SELECTEDUSER,
    payload: username
})

export const loginSetUser = username => ({
    type: ACTION_LOGIN_SETUSER,
    payload: username
})