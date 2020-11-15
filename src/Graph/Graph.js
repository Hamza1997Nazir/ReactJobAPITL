import React, { useState, Component } from 'react';
import './Graph.css';
import Card from '../AdCard/AdCard'; // for some reason not working here,
// Plan was to send job details in props to AdCard component and that will give create cards for jobs

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const Get_Jobs = gql`
{
jobs 
     {
        id
        Title: title
        Description: description
        Location: locationNames
        Apply: applyUrl
        postedAt
        Email : userEmail
        company{
            name
          }
     }
}
`;


class Graph extends Component {

    // tried state but react is not willing to change the values of state at this high frequency, so its not working
    /*
    state = {
        jobDetails:
        {
            Title: "",
            Description: "",
            Apply : "",
            Location: ""
        }
    }

*/



    jobsList() {
        let data = this.props.data;
        if (data.loading) {
            return (
                <div>
                    <h3> Bringing Jobs for you...</h3>
                </div>
            )
        }
        else {
            return data.jobs.map(j => {
                return (
                    //feeding into card component using props
                    <Card companyName={j.company.name} id ={j.id} Title={j.Title} Description={j.Description} Location={j.Location} Apply={j.Apply} Email={j.Email} Posted = {j.postedAt} />
                  /*
                  // other simple way of displaying data instead of props
                  // with this we do not need another component like AdCard.
                  // I got stuck here for some reasons so I tried the above method
                  <div>
                  <ul className="List">                  
                        <li key={j.id}>{j.Title}</li>
                        <li>{j.Location}</li>
                        <li><a href={j.Apply}>Apply Here</a></li>
                       
                        
                    </ul>
                    </div>
                    */

                )
            })
        }
    }
    render() {

        return (

            <div className="graph">
                {this.jobsList()}
            </div>
        )
    };
}
export default graphql(Get_Jobs)(Graph);