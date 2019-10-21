import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import ViewListIcon from '@material-ui/icons/ViewList';
import { Link } from "react-router-dom";
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#1c3334",
  },
  icons: {
    color: "#DA7B93",
    fontFamily: "Garamond",
  },
}));

export default function BotNavBar() {
  const classes = useStyles()
  const [value, setValue] = React.useState('home');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

return (
      <BottomNavigation
        id="botNav"
        value={value} onChange={handleChange}
        showLabels
        className={classes.root} >

        <BottomNavigationAction className={classes.icons}  label="HomePage " value="home" icon={<HomeIcon  />}  component={Link} to="/" />

        <BottomNavigationAction className={classes.icons}  label="Submit" value="folder" icon={<BusinessIcon  />}  component={Link} to="/company" />

        <BottomNavigationAction className={classes.icons}  label="Companies" value="storage" icon={<ViewListIcon />}  component={Link} to="/companies" />
        <BottomNavigationAction className={classes.icons}  label="Maps" value="maps" icon={<MapIcon />}  component={Link} to="/maps" />

      </BottomNavigation>
  )
}
