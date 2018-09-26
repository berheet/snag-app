import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      backgroundColor:'turquoise'
    }
  });

class Btn extends Component{
    constructor({shortlist}){
        super({shortlist})
    }
    render(){
        const {shortlist} = this.props;
        const { classes } = this.props;

        return(
            !shortlist ? (<Button variant="contained" style={{zIndex:'0'}} className={classes.button} onClick={this.props.onFavorite}><strong>Shortlist</strong></Button>): null
        )
    }
}
Btn.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Btn);
