import React from "react";
import Card from "./Card";
import data from './data.js'
import './Main.css'

function Main() {
    console.log(data)
    const placedElements = data.map(place => {
    return(<Card 
        image={place.image} 
        location={place.location}
        googleMapsURL={place.googleMapsURL}
        title={place.title}
        time={place.time}
        text={place.text}
        />)})
    return(
        <main className="main">
            {placedElements}
        </main>
    )
}

export default Main;