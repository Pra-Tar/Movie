import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Headers";
import Kids from "./components/Kids";
import Series from "./components/Series";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Signin from "./components/Sigin";
import Register from "./components/Register";
import WatchList from "./components/WatchList";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} /> {/* Home page */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
