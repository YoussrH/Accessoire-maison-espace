// components/ProductCard.js
import React from "react";
import './pro.css'
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
            <div className="colors">
                {product.colors.map((color, index) => (
                    <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
                ))}
            </div>
            <button className="add-to-cart">Add to cart</button>
        </div>
    );
};

export default ProductCard;
