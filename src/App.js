import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router";
import HomePrincipal from "./pages/home";
import ProductosPruncipal from "./pages/product";
import ListaProducto from './pages/product_list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePrincipal/>}></Route>
        <Route path="/product" element={<ProductosPruncipal/>}></Route>
        <Route path="/product_list" element={<ListaProducto/>}></Route>

      </Routes>
    </Router>
   
  );
}

export default App;
