import React from 'react';
import './AdCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const CardMaking = (props) => {
    return (
        <div key={props.id} className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.Title}</h5>
    <h6 className="card-text">Company: {props.companyName}</h6>
                <h6 className="card-text">{props.Location}</h6>
                <p className="card-text">Posted by {props.Email}</p>
                <p className="card-text">Posted on {props.postedAt}</p>
                <button class="btn btn-primary" onClick={props.click}>See Details</button>
                <br />
                <br/>
                {/*<p>{props.det}</p>*/}
                {/*<p className="card-text">{props.Description}</p>  it is too large*/}
                <a href={props.Apply} class="btn btn-primary">Apply Now</a>
            </div>
        </div>
    )
};
export default CardMaking

//not working here

