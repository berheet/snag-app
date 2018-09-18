import React, {Component} from 'react';
import './Search.css'

class Search extends Component{
    render(){
        return(
            <div className='search-div'>
            <input placeholder='Search...'/>
                </div>
        )
    }
}

export default Search;