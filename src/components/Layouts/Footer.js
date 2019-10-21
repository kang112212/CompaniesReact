import React from 'react';
import { makeStyles } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(theme => ({
footer: {
  margin: 'auto',
  backgroundColor: "#1c3334",
  color: "#DA7B93",
  display: 'flex',
},
icons: {
  fontSize: 'inherit',
  margin: '2px 1px 0px 3px'
},
}));

export default function Footer() {
  const classes = useStyles()

  return (
    <footer id ="foot" className={classes.footer}>
      <div className={classes.footer}>
        <CopyrightIcon className={classes.icons} /> <span> TIL 2019 | Corey Hawkins | </span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/corey-hawkins-webdev/" >
          <LinkedInIcon className={classes.icons} id="linkedInIcon" />
        </a>
      </div>
    </footer>
  )
}
