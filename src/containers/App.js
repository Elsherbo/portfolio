import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from  'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import PhotoAlbumIcon from 'material-ui-icons/PhotoAlbum';
import HomeIcon from 'material-ui-icons/Home';
import InboxIcon from 'material-ui-icons/Inbox';
import MenuIcon from 'material-ui-icons/Menu';

import '../App.css';
import {
    Route,
    Link,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import ContactMe from "./ContactMe";
  import Portfolio from "./Portfolio";
  const drawerWidth = 240;

  const styles = theme => ({
    root: {
      flexGrow: 1,
      height: '100%',
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      position: 'absolute',
      backgroundColor: '#212121',
      marginLeft: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#212121',
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
    },
  });
  
class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };


  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />


<List>
          
          <ListItem  component={props => <Link {...props} to="/" />}>
          
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
          
          <ListItem component={props => <Link {...props} to="/Portfolio" />}>
                <ListItemIcon>
                  <PhotoAlbumIcon />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
                </ListItem>

          </List>
          <Divider />
          <List>
          <ListItem component={props => <Link {...props} to="/Contact" />}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Contact me" />
          </ListItem>
          </List>

      </div>
    );
    return (
      <HashRouter>
      <div className={classes.root}>
        <AppBar
          position="absolute"
         className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Elsherbo
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>

          <div className={classes.toolbar} />
              <Route exact path="/" component={Home}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route path="/contact" component={ContactMe}/>
        </main>
      </div>

      </HashRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);


