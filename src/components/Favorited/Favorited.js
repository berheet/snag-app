import React,{Component} from 'react';
import './Favorited.css'

class Favorited extends Component{
    constructor(props){
        super(props);

        this.state = {
            display:false
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className='favorited'>
            <h1>Favorited List</h1>
            {/* {this.props.saved.length === 0}?{this.props.saved.map((applicant) => {
                return (  <div className='favorited'><ul> 
                <li> <h5>{applicant.name}</h5></li>
                </ul>
                </div>)
            })} */}
            </div>  
        )
    }
}

export default Favorited;