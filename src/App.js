import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import "./styles/tailwind.css";
import Buyer from "./components/Buyer/Buyer";
import Manger from "./components/Manger/Manger";
import Seller from "./components/Seller/Seller";
import Supervisor from "./components/Supervisor/Supervisor";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />

        <Router>
          <Switch>
            <Route exact path='/'>
              <h1 className=''>WELCOME TO SUDADEV</h1>
              <Hero />
            </Route>
            <Route exact path='/Manger'>
              <Manger />
            </Route>
            <Route exact path='/Seller'>
              <Seller />
            </Route>
            <Route exact path='/Buyer'>
              <Buyer />
            </Route>
            <Route exact path='/Supervisor'>
              <Supervisor />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>

        <Footer />
      </div>
    </>
  );
}

export default App;
