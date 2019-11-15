import React from 'react';
import Button from '@material-ui/core/Button';
import { Menu, MenuItem, Paper } from '@material-ui/core/';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cardflip from './Cardflip';
import Convert from './Convertor';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // open click handler
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  //handle close event
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Null feild to leave space empty again
  function Done() {
    return (
      <div>
      </div>
    );
  }

  //calls cardflip comp
  function Cards() {
    return (
      <div className="cards1">
        <Cardflip />
      </div>
    );
  }
  
  //calls conversion comp
  function Convertor() {
    return (
      <div className="cards2">
        <Convert />
      </div>
    );
  }

  return (
    
      <Router>
        <div className="child">
    <Paper className="frame elevation5">
        <h1>Hello</h1>
        <p>Welcome to my app, to begin:</p>
      <Button style={{backgroundColor: '#d7e6fa'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Click Here
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>

          <Link className="link" to="/cards"><MenuItem> Win! </MenuItem></Link>
          <Link className="link" to="/convertor"><MenuItem>Currency Convertor</MenuItem></Link>
          <Link className="link"  to="/done"><MenuItem> Quit </MenuItem></Link>



      </Menu>
      </Paper>
      </div>

        <Route path="/cards" component={Cards} />
        <Route exact path="/convertor" component={Convertor} />
        <Route exact path="/done" component={Done} />

      </Router>
    
  );
}