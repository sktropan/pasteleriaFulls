import React from "react";
import NavbarPrincipal from './components/navbar';

function ProductosPruncipal(){
    return(
        <div>
            <NavbarPrincipal />
            <div className="row">
                <div className="col-md-12">
                    <h2>Producto Principal</h2>
                    <p>Mpstraremos nuestros productos</p>
                </div>

            </div>

        </div>

    );

}

export default ProductosPruncipal;