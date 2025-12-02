import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import  NavbarPrincipal from './components/navbar';


function ListaProducto(){

   const [product, setProduct] = useState([]);
    useEffect(
        () =>{
            Axios.get('http://localhost:3001/api/product')
                .then((response)=>(setProduct(response.data)))
                .catch((error)=> console.log(error));
        }
    );
  
   return(
    <div>
        <NavbarPrincipal/>
    </div>
   );
}

export default ListaProducto;