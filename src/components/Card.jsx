import React from "react"

export default function Card(props) {
let img = "../img/" + props.item.img

    return (
        

        <div className="card">
            <img src={img} className="pub-image"></img>

            <p><span className="bold">Name:</span> {props.item.title}</p>
            <p><span className="bold">Hours: </span>{props.item.hours}</p>
            <p><span className="bold">Address: </span>{props.item.address}</p>
            <p><span className="bold">Phone: </span>{props.item.phone}</p>
            <p><span className="bold">Rating: </span>{props.item.rating}</p>
            <p><span className="bold">Description: </span>{props.item.description}</p>
        </div>
    )
}