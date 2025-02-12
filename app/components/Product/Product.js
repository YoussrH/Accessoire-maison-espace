import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";

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
        
      
        <div className="absolute top-[850px] left-[120px] w-[1320px] h-[1073px] text-sm font-serif ">
           <h2 className="justify-center items-center flex font-bold text-3xl">Nos Produit</h2>
           <div className="flex cursor-pointer flex-wrap justify-center gap-3 font-serif text-sm mt-7 font-normal">
            <b className="relative inline-block">
          Toutes les catégories
          <Image src="/brush.png" width={550} height={100}  alt="Highlight" className="absolute  top-[1px] right-[0px] opacity-65" />
            </b>
            <b className="relative inline-block">
            Accessoires Dressing 
            </b>
            <b className="relative inline-block">
            Accessoires Cuisine
            </b>
            <b>Accessoires Porte</b>
            <b>Outillage</b>
          </div>
        </div>
    );
}
