import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router";
import HomePrincipal from "./pages/home";
import ProductosPruncipal from "./pages/product";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePrincipal/>}></Route>
        <Route path="/product" element={<ProductosPruncipal/>}></Route>
      </Routes>
    </Router>
   
  );
}

export default App;
