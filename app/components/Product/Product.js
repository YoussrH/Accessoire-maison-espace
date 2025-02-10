import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Moonlight Sheepskin",
        description: "Upholstered in white, Genuine sheepskin",
        price: 350,
        image: "/moonlight-sheepskin.png",
        colors: ["orange", "yellow", "green", "blue", "purple"],
    },
    {
        id: 2,
        name: "Bluebell Footstool",
        description: "American Ash frame, organic allure",
        price: 280,
        image: "/bluebell-footstool.png",
        colors: ["orange", "yellow", "green", "blue", "purple"],
    },
    {
        id: 3,
        name: "Gubis Pacha",
        description: "Pierre Paulin, clean-lined silhouette",
        price: 240,
        image: "/gubis-pacha.png",
        colors: ["orange", "yellow", "green", "blue", "purple"],
    },
];

export default function Product() {
    return (
        <div className="container">
            <h1>Our Best Product</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
