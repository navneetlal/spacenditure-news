import React from "react";

import Container from "@material-ui/core/Container";

import HeaderComponent from "./Component/Header";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Cyan from "@material-ui/core/colors/cyan";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      marginTop: theme.spacing(2),
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
    flexItemsSpacing: {
      marginTop: theme.spacing(2),
      color: theme.palette.primary.dark
    }
  })
);

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.mainContainer}>
      <img src="logo.jpeg" height="100" width="100" />
      <Typography
        variant="h3"
        component="h1"
        className={classes.flexItemsSpacing}
      >
        <Box fontWeight="fontWeightBold" m={1} letterSpacing={3}>
          SPACENDITURE
        </Box>
      </Typography>
      <Typography variant="h5">
        <Box fontWeight="fontWeightLight" letterSpacing={6}>
          Towards New Adventures
        </Box>
        </Typography>
        <Typography variant="h5">
        <Box fontWeight="fontWeightLight" m={3} letterSpacing={12}>
          &bull;&bull;&bull;
        </Box>
        </Typography>
      <Typography>
        Get latest updated news related on space.
      </Typography>
      <img src="website-under-construction.jpg" width="500" />
      {/* <HeaderComponent /> */}
    </Container>
  );
}

export default App;
