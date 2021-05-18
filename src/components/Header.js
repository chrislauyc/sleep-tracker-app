import React from 'react';
import {IconButton,Button,AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
function Header(props){
    const {isLoggedIn, activePage} = props;
    const getH1=(activePage)=>{
        if(activePage.includes('account')){
            return 'Let\'s Make You an Account!'
        }
        else if(activePage.includes('personalinfo')){
            return 'We Need to Know a Bit About You'
        }
        else if(activePage.includes('sleep')){
            return 'What Are Your Goals?'
        }
        else{
            return 'Sleep Tracker';
        }
        
    };
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
                    {getH1(activePage)}
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