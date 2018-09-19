import React from 'react';
import './Search.css'

const Search = ({searchField, searchChange}) =>{
        return(
            <div className='search-div'>
            <input placeholder='Search...'      
            type='search'
        onChange={searchChange}/>
                </div>
        )
}

export default Search;