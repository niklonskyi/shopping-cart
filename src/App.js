import './App.sass';
import FullHeight from "react-full-height";
import Header from "./components/Header";
import Home from "./view/Home";
import Shop from "./view/Shop";
import About from "./view/About";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "./store/counterSlice";




export default function App() {
    // const [cartCount, addToCount] = useState(0);
    //
    // function updateCount() {
    //     addToCount(prevState => {
    //         return prevState + 1;
    //     })
    // }

    const cartCount = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
            <BrowserRouter>
                <FullHeight>
                <Header cartCount={cartCount}></Header>
                <Routes>
                    <Route element={<Home />} path="/" exact />
                    <Route element={<Shop addToCart={() => dispatch(increment())} />} path="/shop" />
                    <Route element={<About />} path="/about" />
                </Routes>
                </FullHeight>
            </BrowserRouter>
    );
}
