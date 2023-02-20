// import React from "react"
import locationLogo from '../images/locationLogo.png'
export default function Card(props){
    // console.log(props)
    return(
        <div className="card-component">
            <section className="card">
                <img src={props.item.imageUrl} className="card-img"/>
                <div className="card-details">
                    <div className='location'><img src={locationLogo}/> <span className='location-text'>{props.item.location.toUpperCase()}</span> <a href="#">View on Google Maps</a></div>
                    <h1>{props.item.title}</h1>
                    <p><span className='card-date'>{props.item.startDate}</span> <span className='card-date'> - {props.item.endDate}</span></p>
                    <p>{props.item.description}</p>
                </div>

            </section>
        </div>
    )
}