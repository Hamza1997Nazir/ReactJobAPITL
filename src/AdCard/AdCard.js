import React from 'react';
import './AdCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const CardMaking = (props) => {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.Title}</h5>
                <h6 className="card-text">{props.Location}</h6>
               {/* <button class="btn btn-primary" onClick={this.ShowDescription} >See Details</button>*/}
                <br></br>
                {/*<p className="card-text">{props.Description}</p>  it is too large*/}
                <a href={props.Apply} class="btn btn-primary">Apply Now</a>
            </div>
        </div>
    )
};
export default CardMaking

//not working here

