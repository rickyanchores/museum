import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Banner from "./components/Banner/Banner";


import Nav from "./components/Nav/Nav";
import Collection from "./pages/Collection/Collection";
import Footer from "./pages/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";

const App = () => {
  return(
    <Router>
        <Nav />
        <Routes>
          <Route component={Home} />
        </Routes>
        <Home />
        <Banner />
        <Collection />
        <Gallery />
        <Footer />
    </Router>
  )
}

export default App;