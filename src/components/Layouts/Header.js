import React from 'react';
import { AppBar, Toolbar, CssBaseline, makeStyles } from '@material-ui/core/';
import LinkedInIcon from '@material-ui/icons/LinkedIn';





const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#376e6f",
  },
  head:{
  display: "flex",
  margin: "0px auto",
  color: "#2E151b",
  textAlign: "center",
},
bot: {
  paddingBottom: "30px",
}
}))



export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.bot}>
      <CssBaseline />
        <AppBar >
          <Toolbar className={classes.root}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corey-hawkins-webdev/" >
              <LinkedInIcon />
            </a>
            <div className={classes.head}> <h1>Title</h1> </div>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </div>
  );
}
