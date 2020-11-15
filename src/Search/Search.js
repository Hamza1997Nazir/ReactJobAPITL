import React from 'react';

const SearchBar = (props) => {
    return (

        <div class="col">
            <input class="form-control form-control-lg form-control-borderless" 
            type="search" 
            placeholder="Hit a Bullseye" 
            onChange={props.handleChange}/>
        </div>

    )
};
export default SearchBar

