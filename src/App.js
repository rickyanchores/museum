import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner2/Banner2";


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
        <Banner2 />
        <Footer />
    </Router>
  )
}

export default App;