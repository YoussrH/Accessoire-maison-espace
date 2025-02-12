"use client";

import React, { useState } from "react";
import { BsMenuApp } from "react-icons/bs";
import { Instagram, Twitter, Search, User } from "lucide-react";
import { TbShoppingBagSearch } from "react-icons/tb";
import { RiHeart3Line } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // For search modal
  const [selectedCategory, setSelectedCategory] = useState("All Categories"); // For search modal dropdown

  const categories = [
    "Toutes les catégories",
    "Accessoires Dressing",
    "Accessoires Cuisine",
    "Accessoires Porte",
    "Outillage",
  ];

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAE5] shadow-md">
      <div className="flex flex-col items-start justify-start gap-1 mt-[1%] ml-[5%] w-[90%] lg:ml-[10%] lg:w-[80%]">
        {/* Top Section */}
        <div className="flex justify-between items-center w-full py-1">
          {/* Search Icon (Visible Only in Mobile) */}
          <Search
            size={24}
            className="cursor-pointer text-[#C65616] lg:hidden"
            onClick={toggleSearchModal}
          />

          {/* Center Icons for Mobile */}
          <div className="flex gap-2 lg:hidden cursor-pointer">
            <TbShoppingBagSearch size={24} className="text-[#C65616]" />
            <RiHeart3Line size={24} className="text-[#C65616]" />
            <User size={24} className="text-[#C65616]" />
          </div>

          {/* Menu Icon (Only in Mobile) */}
          <div className="lg:hidden">
            <BsMenuApp
              size={24}
              className="text-[#C65616]"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Social Media Icons (Only in Desktop) */}
          <div className="hidden lg:flex gap-2">
            <LuFacebook size={20} className="text-[#C65616]" />
            <Instagram size={20} className="text-[#C65616]" />
            <Twitter size={20} className="text-[#C65616]" />
          </div>

          {/* Logo */}
          <div className="hidden lg:flex justify-center">
            <img
              src="/Group 10.svg"
              alt="Logo"
              width={100}
              height={50}
              className="w-[80px] lg:w-[100px]"
            />
          </div>

          {/* Language Selection */}
          <div className="hidden lg:flex font-semibold text-sm lg:text-base">
            <span>FR</span> | <span>EN</span>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-[1px] bg-[#F0EEE7]"></div>

        {/* Desktop Navigation Bar (Hidden in Mobile) */}
        <div className="hidden lg:flex flex-row justify-between items-center w-full py-4">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5 font-serif text-sm font-normal">
            <b className="relative inline-block cursor-pointer">
              Exclusif{" "}
              <span className="w-[7px] h-[7px] bg-[#F57401] rounded-full absolute top-[-px] right-[-10px]"></span>
            </b>
            <b className="relative inline-block cursor-pointer">
              Nouveaux arrivages{" "}
              <img
                src="/new.png"
                alt="Highlight"
                className="absolute top-[-20px] right-[-10px] w-5 h-auto"
              />
            </b>
            <b className="relative inline-block cursor-pointer">
              En bois{" "}
              <span className="w-[7px] h-[7px] bg-[#F57401] rounded-full absolute top-[-1px] right-[-10px]"></span>
            </b>
            <b className="cursor-pointer">Vitrine</b>
            <b className="cursor-pointer">Accessoires</b>
            <b className="cursor-pointer">Contact</b>
          </div>

          {/* Search Bar */}
          <div
            className="flex items-center gap-2 border-2 border-[#FFC5A1] rounded-full px-3 py-1 bg-transparent cursor-pointer"
            onClick={toggleSearchModal}
          >
            <Search size={18} className="text-[#FFC5A1]" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-transparent text-[#C65616] text-lg font-bold cursor-pointer"
              readOnly // Make the input non-editable
            />
            <span className="text-[#FFC5A1] text-lg font-bold">|</span>
            <BsMenuApp size={24} className="text-[#C65616]" />
          </div>

          {/* Icons: Cart, Wishlist, Avatar */}
          <div className="flex gap-3">
            <TbShoppingBagSearch size={24} className="text-[#C65616]" />
            <RiHeart3Line size={24} className="text-[#C65616]" />
            <User size={24} className="text-[#C65616]" />
          </div>
        </div>

        {/* Dropdown Menu for Mobile (Visible When Menu is Open) */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center gap-3 py-4 bg-[#FFFAE5] w-full border-t border-[#F0EEE7]">
            <b>Exclusif</b>
            <b>Nouveaux arrivages</b>
            <b>En bois</b>
            <b>Vitrine</b>
            <b>Accessoires</b>
            <b>Contact</b>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onClick={toggleSearchModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 "
              onClick={toggleSearchModal}
            >
              X
            </button>

            {/* Search Input and Dropdown */}
            <div className="flex items-center w-full gap-4 mt-3">
              <input
                type="text"
                placeholder="Cherchez un produit ou accessoire"
                className="border px-4 py-2 rounded-md flex-grow focus:outline-none"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border px-4 py-2 rounded-md focus:outline-none"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Illustration and Footer Text */}
            <div className="mt-8">
              <img
                src="/sr.png" // Replace with your image
                alt="Hardware Illustration"
                className="mx-auto w-56"
              />
            </div>
            <h2 className="text-xl font-bold mt-4 justify-center items-center flex">
              Comment pouvons-nous vous aider aujourd'hui?
            </h2>
            <p className="text-gray-600 mt-2 justify-center items-center flex">
              Explorez nos produits, catégories, et accessoires de maison.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}