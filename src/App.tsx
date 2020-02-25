import React from 'react';

import Container from '@material-ui/core/Container';

import HeaderComponent from './Component/Header';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Cyan from '@material-ui/core/colors/cyan';

const useStyles = makeStyles((theme: Theme) => createStyles({
  mainContainer: {
    backgroundColor: Cyan[50],
    height: '100vh'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.mainContainer}>
      <HeaderComponent />
    </Container>
  );
}

export default App;
