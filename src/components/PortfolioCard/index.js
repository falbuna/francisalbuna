import React from "react";

function PortfolioCard(props){
    return (
        <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Description:</strong> {props.description}
                </li>
            </ul>
        </div>
    )
}
export default PortfolioCard;