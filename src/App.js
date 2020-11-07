import './App.css';
import React,{useEffect} from "react";
import Login from './Components/Login';
import Home from "./Components/Home"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Header from "./Components/Header";
import {auth} from "./Components/firebase";
import {useStateValue} from "./Components/StateProvider";
import Store from "./Components/Store";
import Navbar from "./Components/Navbar";
import theme from "./Components/Theme";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Checkout from './Components/CheckOut';


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);
      if (authUser) {
        //looged in already
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out already
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div className="App">
       
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/store">
          <Navbar/>
          <Store/>
        </Route>
        <Route path="/checkout">
          <Navbar/>
          <Checkout/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
        
      </Switch>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
