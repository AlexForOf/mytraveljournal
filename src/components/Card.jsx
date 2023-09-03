import React from "react";
import './Card.css';

function Card(props) {
    const {image, location, googleMapsURL, title, time, text} = props
    console.log(image)
    return (
        <div className="card-main">
            <section className="card-main-image-container">
                <img 
                src={image}
                />
            </section>
            <section className="card-main-info-container">
                <div className="card-main-info-container-location">
                    <div className="card-main-info-container-location-top">
                        <p>📍{location}</p>
                        <a href={googleMapsURL} target="_blank">View on google maps</a>
                    </div>
                    <h1 className="card-main-info-container-title">{title}</h1>
                </div>
                <div>
                    <h3 className="card-main-info-container-time">{time}</h3>
                    <p className="card-main-info-container-text">{text}</p>
                </div>
            </section>
        </div>
    )
}

export default Card;