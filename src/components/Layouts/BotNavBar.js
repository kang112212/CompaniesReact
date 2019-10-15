import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import ViewListIcon from '@material-ui/icons/ViewList';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#1c3334",
    color: "#DA7B93",
    fontFamily: "Garamond",
  },
}));

export default function BotNavBar() {
  const classes = useStyles()
  const [value, setValue] = React.useState('folder');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

return (
  <div id="moveUpFromBotNav">
    <BottomNavigation
      id="botNav"
      value={value} onChange={handleChange}
      showLabels
      className={classes.root} >

      <BottomNavigationAction className={classes.root} label="Submit Company" value="folder" icon={<BusinessIcon  />}  component={Link} to="/company" />

      <BottomNavigationAction className={classes.root} label="Companies" value="storage" icon={<ViewListIcon />}  component={Link} to="/companies" />

    </BottomNavigation>
  </div>
  )
}