import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    paddingTop: '20px',
    fontFamily: " 'Permanent Marker', cursive ",
    textAlign: 'center',
    color: '#DEF2F1',
  },
});

export default function Homepage(){
const classes = useStyles();

  return(
    <div id="homePage">
      <Typography className={classes.root} variant="h3" gutterBottom>
          Technical Industry Log
      </Typography>
    </div>
    )
}
