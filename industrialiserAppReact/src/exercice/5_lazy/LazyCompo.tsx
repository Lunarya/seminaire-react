import { Button } from "@mui/material";
import React, { Suspense, useCallback, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { ProductContext } from "./context";
import Home from "./Home";
import Shop from "./Shop";
import { ProductCart } from "./type";

const LazyCart = React.lazy(() => import("./Cart"));
const LazyShop = React.lazy(() => import("./Shop"));
const LazyHome = React.lazy(() => import("./Home"));
const LazyCompo = () => {
    const [displayShop, setDisplayShop] = useState<boolean>(false);
    const [displayHome, setDisplayHome] = useState<boolean>(false);
    const [displayCart, setDisplayCart] = useState<boolean>(false);

    return (
        <div>
            <Button onClick={() => setDisplayCart(!displayCart)}> Cart</Button>
            <Button onClick={() => setDisplayShop(!displayShop)}> Shop</Button>
            <Button onClick={() => setDisplayHome(!displayHome)}> Home</Button>

            <Suspense fallback={<div>loading</div>}>
                {displayShop && <LazyShop />}
                {displayCart && <LazyCart />}
                {displayHome && <LazyHome />}
            </Suspense>
        </div >
    )
}

export default LazyCompo;
