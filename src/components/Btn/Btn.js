import React,{Component} from 'react';

class Btn extends Component{
    constructor({shortlist}){
        super({shortlist})
    }
    render(){
        const {shortlist} = this.props;

        console.log(this.props.shortlist)
        return(

            !shortlist ? (<button onClick={this.props.onFavorite}>Shortlist</button>): (<button >Remove</button>)
            // <button onClick={this.props.onFavorite}> Shortlist </button>
        )
    }
}

export default Btn;