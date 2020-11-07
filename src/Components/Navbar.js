import React,{useState,useEffect} from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { AppBar,Toolbar,IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import navbarimg from "./images/food-delivery.png";
import {auth} from "./firebase"
import Typography from "@material-ui/core/Typography";
import {  makeStyles } from '@material-ui/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import Navimg from "./images/Abstract-Envelope.svg";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles(theme=>({
  toolbarMargin:{
      ...theme.mixins.toolbar,
    marginBottom:"3rem"
  },logo:{
    height:"6em"
  },tabContainer:{
    marginLeft:"auto"
  },tab:{
    ...theme.typography.tab, 
    minWidth:10,
    marginLeft:"25px"
  },buttons:{
    ...theme.typography.estimate,
    borderRadius:"50px",
    margin:"0 50px 0 50px",
    height:"45px"
  },imgContainer:{
    padding:0,
    "&:hover":{
      background:"transparent"
    }
  },menu:{
    backgroundColor:theme.palette.common.blue,
    borderRadius:"0px"
  },menuItem:{
    ...theme.typography.tab,
    opacity:0.6,
    color:"#fff",
    "&:hover":{
      opacity:1,
    }
  },basketLength:{
      margin:"25px 0 0 -15px"
  }
}))




function Header(props) {
    const [{basket,user},dispatch] = useStateValue();


    const classes= useStyles();
    const [value,setValue]=  useState(0);
  const [anchorEl,setAnchorEl]= useState(null);
  const [open,setOpen]= useState(false);

    const handleTab = (e,value)=>{
      setValue(value);
    }

    const handleClick = (e)=>{
      setAnchorEl(e.currentTarget);
      setOpen(true);
    }

      const handleClose = (e)=>{
      setAnchorEl(null);
      setOpen(false);
    }

const handleAuthentication=()=>{
    if (user) {
      auth.signOut();
    }
}


  useEffect(()=>{
  if(window.location.pathname === "/" && value !== 0){
    setValue(0)
  }else if(window.location.pathname === "/services" && value !== 1){
    setValue(1)
  }
  else if(window.location.pathname === "/mobileapp" && value !== 1){
    setValue(1)
  }
  else if(window.location.pathname === "/custumsoftware" && value !== 1){
    setValue(1)
  }
  else if(window.location.pathname === "/websites" && value !== 1){
    setValue(1)
  }
  else if(window.location.pathname === "/revolutions" && value !== 2){
    setValue(2)
  }else if(window.location.pathname === "/about" && value !== 3){
    setValue(3)
  }else if(window.location.pathname === "/contacts" && value !== 4){
    setValue(4)
  }
},[value]);
    return (
          <div>
             <ElevationScroll {...props}>
            <AppBar position="fixed" color={Navimg} style={{backgroundImage:'url('+Navimg+')'}}>
            <Toolbar disableGutters>
              <Button component={Link} disableRipple to="/" className={classes.imgContainer} onClick={()=> setValue(0)}>
              <Link to="/">
              <img src={navbarimg} alt="Company Logo" className={classes.logo}/>
              </Link>
              <h2>Gro Pal</h2>
              </Button>
              <Tabs value={value} onChange={handleTab} className={classes.tabContainer} indicatorColor="primary">
                <Tab
                className={classes.tab} component={Link} to="/" label="Home"></Tab>
                <Tab
                className={classes.tab} component={Link} to="/store" label="Store"></Tab>
                <Tab  aria-owns={anchorEl ? "simple-menu": undefined} aria-haspopup={anchorEl ? "true" : undefined} 
                onMouseOver={handleClick} className={classes.tab} component={Link} to="/store"  label="Profile" ></Tab>
                
                <Tab
                className={classes.tab} component={Link} to="/checkout" icon={<ShoppingCartOutlinedIcon/>} ></Tab>
                <span className={classes.basketLength}>({basket.length})</span>
              </Tabs>
              <Tab
                className={classes.tab} onClick={ handleAuthentication} component={Link} to={!user?"/login":"/store"} label={user ? "SIGN OUT" : "SIGN IN"}></Tab>
{/*               
              <Button variant="contained" color="primary" className={classes.buttons}>Free Estimate</Button> */}
              <Menu id="simple-menu" open={open} anchorEl={anchorEl} onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}  classes={{paper:classes.menu}} elevation={0}>
                
                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to="/store" indicatorColor="primary" classes={{root:classes.menuItem}} >{user?.email}</MenuItem>
                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to="/store" indicatorColor="primary" classes={{root:classes.menuItem}} >Settings</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          
          </ElevationScroll>
          <div className={classes.toolbarMargin}/>
       </div>
    )
}

export default Header
