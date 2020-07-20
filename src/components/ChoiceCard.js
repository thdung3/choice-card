import React from 'react'

export default function ChoiceCard(props) {
    console.log('props:', props)
    return (
        <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title}></img>
            <h3>{props.winner ? 'Won' : 'Lose'}</h3>
        </div >
    )
}
