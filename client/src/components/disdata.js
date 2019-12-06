import React from 'react'

function disdata({player}) {


    return (
        <div className='data-card'>
            <p>Player Name: {player.name}</p>
            <p>Country: {player.country}</p>
            <p>Search Number: {player.searches}</p>
        </div>
    )
}

export default disdata
