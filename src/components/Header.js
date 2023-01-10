import '../styles/header.sass'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Header(props) {

    let cartCount = props.count;

    return (
        <header className={'header padding'}>
            <div className="logo">
                <h1>Hotline Shop</h1>
            </div>
            <div  className="navbar">
                <nav>
                    <ol>
                        <li className="nav_link"><Link to='.'>Home</Link></li>
                        <li className="nav_link"><Link to="./shop">Shop</Link></li>
                        <li className="nav_link"><Link to="./about">About</Link></li>
                        <li className="nav_link"><a href="">Cart {props.cartCount}</a></li>
                    </ol>
                </nav>
            </div>
        </header>
    )

}

export default Header;