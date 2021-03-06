import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Footer from "./Footer";


function App() {
  const [{ user }, dispatch] = useStateValue();

  // UseEffect --- piece of code wich runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operation go in here..
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* con esto no necesito el exact  */}
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
            <Footer/>
          </Route>
          {/* This is the defauly route, "/" */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
