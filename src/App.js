import React from "react";
import Footer from "./pages/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";

const App = () => {
  return(
    <div className="App">
        <Home />
        <Gallery />
        <Footer />
    </div>
  )
}

export default App;