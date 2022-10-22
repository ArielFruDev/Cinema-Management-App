const setAllMovies = (movies) => {
    const action = {
        type: 'ADD_MOVIES',
        payload: movies
    }
    return action
}

const setAllJsonFileUsers = (users) => {
    const action = {
        type: 'ADD_JSONFILE_USERS',
        payload: users
    }
    return action
}

const setAllDataBaseUsers = (users) => {
    const action = {
        type: 'ADD_DB_USERS',
        payload: users
    }
    return action
}

const setAllPermissions = (perms) => {
    const action = {
        type: 'ADD_PERMISSIONS',
        payload: perms
    }
    return action
}

const setAllMembers = (members) => {
    const action = {
        type: 'ADD_MEMBERS',
        payload: members
    }
    return action
}

const setAllSubscriptions = (subs) => {
    const action = {
        type: 'ADD_SUBSCRIPTIONS',
        payload: subs
    }
    return action
}

const setLoggedUser = (user) => {
    const action = {
        type: 'ADD_LOGGED_USER',
        payload: user
    }
    return action
}

export {setAllMovies, setAllDataBaseUsers, setAllPermissions, setAllMembers, setAllSubscriptions, setLoggedUser, setAllJsonFileUsers}