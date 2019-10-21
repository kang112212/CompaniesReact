import React from 'react';
import { AppBar, Toolbar, CssBaseline, makeStyles, useTheme } from '@material-ui/core/';
import MapIcon from '@material-ui/icons/Map';



//Imports for material ui-drawer
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessIcon from '@material-ui/icons/Business';
import ViewListIcon from '@material-ui/icons/ViewList';
import { Link } from "react-router-dom";
import clsx from 'clsx';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#376e6f",
    display: "flex",
    color: "#DEF2F1",
    justifyContent: "space-between",
  },
bot: {
  paddingBottom: "30px",
},
hide: {
  display: 'none',
},
drawer: {
  width: drawerWidth,
  flexShrink: 0,
},
drawerPaper: {
  width: drawerWidth,
},
drawerHeader: {
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
},
content: {
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
},
contentShift: {
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: 0,
},
}))

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.bot}>
      <CssBaseline />

        <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} >
          <Toolbar className={classes.root}>
            <IconButton
              id="sideNav"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <div> <h1>TIL</h1> </div>
            <div className="gcse-search"></div>
          </Toolbar>

        </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
              <List>
                <ListItem button key={1} component={Link} to="/" onClick={handleDrawerClose}>
                  <ListItemText primary={'Submit Companies'} />
                  <ListItemIcon>{ <BusinessIcon /> }</ListItemIcon>
                </ListItem>
                <ListItem button key={2} component={Link} to="/companies"  onClick={handleDrawerClose}>
                  <ListItemText primary={'Companies'} />
                  <ListItemIcon>{ <ViewListIcon/> }</ListItemIcon>
                </ListItem>
                <ListItem button key={3} component={Link} to="/maps"  onClick={handleDrawerClose}>
                  <ListItemText primary={'Maps'} />
                  <ListItemIcon>{ <MapIcon /> }</ListItemIcon>
                </ListItem>
              </List>
            <Divider />
          </Drawer>
      <Toolbar />
    </div>
  );
}
