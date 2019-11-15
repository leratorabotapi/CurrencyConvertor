import React, {Component} from 'react';
import { Grid, Container } from '@material-ui/core';
import CardComp from './CardComp';

class App extends Component {
  render() {
    return (
      <Container>

      <div className="">
      <Grid container spacing={12}>
        <CardComp />
        <CardComp />
        <CardComp />
      </Grid>
      </div>

      </Container>
    );
  }
}

export default App;