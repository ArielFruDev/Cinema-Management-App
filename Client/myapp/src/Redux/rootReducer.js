// import getAllMovies from "../utils/moviesUtils"

// let movies;


const initialState = {
    jsonFileUsers: [],
    movies: [],
    dateBaseUsers: [],
    loggedUser: {},
    permissions: [],
    members: [],
    subscriptions: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_JSONFILE_USERS':
            return {...state, jsonFileUsers: [...action.payload]}
        case 'ADD_MOVIES':    
            return {...state, movies: [...action.payload]};  
        case 'ADD_DB_USERS':
            return {...state, dateBaseUsers: [...action.payload]};
        case 'ADD_PERMISSIONS':
            return {...state, permissions: [...action.payload]}; 
        case 'ADD_MEMBERS':
            return {...state, members: [...action.payload]};
        case 'ADD_SUBSCRIPTIONS':
            return {...state, subscriptions: [...action.payload]};
        case 'ADD_LOGGED_USER':
            return {...state, loggedUser: action.payload}; 
        default:
            return state;
    }

}

export default reducer