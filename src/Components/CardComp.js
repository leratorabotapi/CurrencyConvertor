import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import { Grid, Paper, Typography } from '@material-ui/core';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';

// Randomly finds if you win or lose on card flip
const LLC = () => {
  var start = ["CONGRATULATIONS! You’ve won a prize!", "Sorry, you lost."];
  var stat = start[Math.floor(Math.random() * start.length)];
  return stat;
}

//transiton animation of dialog popup
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Cards extends Component {

  //flip state
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  // click for flip state
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  

  render() {
    return (
        <Grid item md={3}>
          <div  className="" onClick={this.gambleWin}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <front key="front">
        <Paper onClick={this.handleClick} className="cardbodyfront" style={{ }}>
          
          </Paper>
        </front>
 
        <back key="back">
        <Paper onClick={this.handleClick} className="cardbodyback">
          </Paper>
        </back>
      </ReactCardFlip>
        </div>

        <Dialog open={this.state.isFlipped}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        TransitionComponent={Transition}>
          <DialogTitle id="alert-dialog-slide-title">{"Hey There!"}</DialogTitle>
            <DialogContent>
             <DialogContentText id="alert-dialog-slide-description">
                <Typography><LLC></LLC> <br></br>
                Thank you for playing</Typography>
              </DialogContentText>
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick} color="primary">
             Try Again
             </Button>
             <Button onClick={this.handleClick} color="secondary">
              Quit
             </Button>
          </DialogActions>
        </Dialog>
        </Grid>

    );
  }
}

export default Cards;