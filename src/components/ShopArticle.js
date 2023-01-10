import {Component} from "react";
import '../styles/shopArticle.sass'
import { motion } from "framer-motion"

function ShopArticle(props) {

    let courtCount = 0;

    return (
        <motion.div
        whileHover={{scale: 1.1}}>
            <div className="shop_article">
                <div className="shop_article_content">
                    <div className="article_image">
                        <img src={props.articleImage} width={'100px'} height={'100px'} alt=""/>
                    </div>
                    <div className="article_name">
                        <h3>{props.articleName}</h3>
                    </div>
                    <div className="article_text">
                        <p>{props.articleText}</p>
                    </div>
                    <div className="article_add">
                        <p><button onClick={props.addToCart}>Add</button></p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ShopArticle;