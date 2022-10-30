import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MovieSubscriptions = ({movieId}) => {

    const subscriptions = useSelector(state => state.subscriptions)
    const members = useSelector(state => state.members)

    const subss = [
        {memberId: 1,
        movies: [
            {movieId: "a",
            date: "1/2/3"},
            {movieId: "b",
            date: "1/2/3"}
        ]},
        {memberId: 2,
        movies: [
            {movieId: "b",
            date: "1/2/3"},
            {movieId: "c",
            date: "1/2/3"}
        ]},
        {memberId: 3,
        movies: [
            {movieId: "d",
            date: "1/2/3"},
            {movieId: "e",
            date: "1/2/3"}
        ]}
    ]

    const subscriptionsWatched = subscriptions.filter(sub => sub.movies.find(movie => movie.movieId === movieId))
    const membersWatched = subscriptionsWatched.map(sub => {
        const id = sub.memberId
        const memberName = members.find(member => member._id === id).name
        const subscriptionDate = sub.movies.find(movie => movie.movieId === movieId).date
        return {
            name: memberName,
            date: subscriptionDate
        }
    })

    console.log(membersWatched);

  return (
    <div style={{border: '3px solid black'}}>
                <p>subscriptions watched this:</p>
                <ul>{membersWatched.map(member => {
                    return <li><Link to={'/main/subscriptions/allMembers'} state={{memberName: member.name}}>{member.name}</Link>, {member.date}</li>
                })}</ul>

              </div>
  )
}

export default MovieSubscriptions