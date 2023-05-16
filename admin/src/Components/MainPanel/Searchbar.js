import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles, Typography } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@mui/material/Button";
import "../../assests/css/style.css"


// import Avatar from "./UserAvatar";
import { Avatar } from '@mui/material';
// import Logout from '../../Logout';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width:"102%"
    },
    searchInput: {
        opacity: '0.4',
        backgroundColor: '##715c5c05',
        marginLeft: theme.spacing(40),
        marginTop: theme.spacing(1),
        borderRadius: "17px",
        border:"1px solid",
        width:"120%",
        height:"40px",
        fontSize: '0.8rem',
        '&:hover': {
        
        
          
        },
        '& .MuiSvgIcon-root': {
            
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1)
        }
    }
}))

export const Search = ({ title, user }) => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="right" marginLeft="50px">
                    <Grid item>
                        <InputBase
                            placeholder="Search Here on this jfgjjhgjhghjgjhgjhgjh..."
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
{/* 
                    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle> 

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}








                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                        <Avatar />
                        </IconButton>
                        <IconButton>
                        {/* <Button
                
                   
                      type="submit"
                      variant="contained"
                      id="reg-button"
                    >
                        Logout
                      
                    </Button> */}
                    </IconButton>
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
