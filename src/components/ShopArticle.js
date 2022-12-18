import {Component} from "react";
import '../styles/shopArticle.sass'

function ShopArticle() {
    return (
        <div className="shop_article">
            <div className="shop_article_content">
                <div className="article_image">
                    <img src="images/richard1.webp" width={'100px'} alt=""/>
                </div>
                <div className="article_name">
                    <h3>Article</h3>
                </div>
                <div className="article_text">
                    <p>Nice mask</p>
                </div>
            </div>
        </div>
    )
}

export default ShopArticle;