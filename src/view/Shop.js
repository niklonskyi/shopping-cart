import {Component, useState} from "react";
import Header from "../components/Header";
import '../styles/shop.sass'
import ShopArticle from "../components/ShopArticle";
import FullHeight from "react-full-height";

import DonJuan from '../images/DonJuan.webp';
import Tony from '../images/Tony.webp';
import RasmusRed from '../images/RasmusRed.webp';
import Jones from '../images/Jones.webp';
import Nigel from '../images/Nigel.webp';
import Brandon from '../images/Brandon.webp';

function Shop(props) {


    return (
        <div className="shop background">
            <FullHeight>
            <div className="articles padding">
                <ShopArticle addToCart={props.addToCart} articleImage={DonJuan} articleName='Don Juan' articleText="Bearing too much weight...
                Inevitably leads to the collapse of everything."/>
                <ShopArticle addToCart={props.addToCart} articleImage={Tony} articleName='Tony' articleText="I didn't sign up to be no hero...
                that's not my thing. I just want some action."/>
                <ShopArticle addToCart={props.addToCart} articleImage={RasmusRed} articleName='Rasmus' articleText="I don't know you! Why are you here?
                You're no guest of mine!"/>
                <ShopArticle addToCart={props.addToCart} articleImage={Jones} articleName='Jones' articleText="This... This whole thing. All that has happened."/>
                <ShopArticle addToCart={props.addToCart} articleImage={Nigel} articleName='Nigel' articleText="I have no interest in politics...
                You people have wasted enough of my time already."/>
                <ShopArticle addToCart={props.addToCart} articleImage={Brandon} articleName='Brandon' articleText="
                Please drop it off at SW 107th place. Our clients will not tolerate further delays!"/>
            </div>
            </FullHeight>
        </div>
    )

}

export default Shop;
