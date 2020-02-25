import React from "react";

import Typography from "@material-ui/core/Typography";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  mainHeader: {
    paddingTop: theme.spacing(4)
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
  <Typography variant="h4" className={classes.mainHeader}>
    News - Spacenditure
  </Typography>
  );
}
