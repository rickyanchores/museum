import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./pages/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";

const App = () => {
  return(
    <div className="App">
        <Nav />
        <Home />
        <Gallery />
        <Footer />
    </div>
  )
}

export default App;