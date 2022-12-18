import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Shop from "../view/Shop";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;