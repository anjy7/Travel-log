import React from "react"

export default function Card(props)
{
    return(
        <div className="card">
            <img src={`${props.item.imageUrl}`} className="location-img"/>
            <div className="content">
                <div className="main-title">
                <img src="./images/logo.svg" className="location-logo"/>
                <span className="location">{props.item.location}</span>
                <a className="google-maps" href="{props.item.googleMapsUrl}">View on Google Maps</a>

                </div>
                <h1 className="title">{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
        
    )
}