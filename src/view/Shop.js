import {Component} from "react";
import Header from "../components/Header";
import '../styles/shop.sass'
import ShopArticle from "../components/ShopArticle";

function Shop() {
    return (
        <div className="shop background">
            <Header/>
            <div className="articles padding">
                <ShopArticle/>
                <ShopArticle/>
                <ShopArticle/>
                    <ShopArticle/>
                    <ShopArticle/>
                    <ShopArticle/>
            </div>
        </div>
    )
}

export default Shop;
