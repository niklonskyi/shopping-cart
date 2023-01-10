import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Shop from "../view/Shop";
import {useState} from "react";

const RouteSwitch = () => {

    const [cartCount, addToCount] = useState(0);

    function updateCount() {
        addToCount(prevState => {
            return prevState + 1;
        })
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home cartCount={cartCount} />} />
                <Route path="/shop" element={<Shop cartCount={cartCount} addToCart={updateCount}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;