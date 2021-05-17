import React from 'react';
import {IconButton,Button,AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
function Header(props){
    const {isLoggedIn} = props;
    const useStyles = makeStyles((theme) => ({
        title: {
          flexGrow: 1,
        },
      }));
    const classes = useStyles();
    return(
    <header>
        <AppBar position='static'>
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    Sleep Tracker
                </Typography>
                {
                    isLoggedIn?<Button color='inherit'>Logout</Button>:<Button color='inherit' component={Link} to='/form/account'>Signup</Button>
                }
            </Toolbar>
        </AppBar>
    </header>
    );
}
export default Header;