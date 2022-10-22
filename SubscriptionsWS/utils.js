//לבנות פונקציה שמקבלת יוזרים, פונקציה נוספת שמקבלת סרטים. פונקציה שעוטפת אותם ודוחפת את המידע לתוך מונגו

const axios = require('axios')

const getUsers = async() => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = resp.data
    const usersList = users.map(user => {
        let obj = {
            name: user.name,
            email: user.email,
            city: user.address.city
        }
        return obj
    })
    return usersList
}

const getShows = async() => {
    const resp = await axios.get('https://api.tvmaze.com/shows')
    const shows = resp.data
    const showsList = shows.map(show => {
        let obj = {
            name: show.name,
            genres: show.genres,
            image: show.image.medium,
            premiered: show.premiered
        }
        return obj
    })
    return showsList
}

module.exports = {getUsers, getShows}