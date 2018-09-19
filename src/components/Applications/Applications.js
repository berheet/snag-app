import React,{Component} from 'react';

class Applications extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        const all_applications = this.props.applications.map((applicant) => {
            return(<div> <ul className='applicant-li'>
              <li  key={applicant.id}> <h5>{applicant.name} - {applicant.position}</h5>
                <p></p>
                <button onClick={ () => this.onFavorite(applicant) }>Favorite</button>
              </li></ul> </div>
            )
          })
          const saved_applications = this.props.saved.map((applicant) =>{
              return(
                  <div><ul> 
                      <li> <h5>{applicant.name}</h5></li>
                      </ul>
                      </div>
              )
          })
        return(
            <div><h1>Applicants</h1>
            {all_applications}
            {saved_applications}
            </div>
        )
    }
}

export default Applications;