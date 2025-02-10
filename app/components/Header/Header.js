"use client";
import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import SignInForm from "../Auth/SignInForm";
import SignUpForm from "../Auth/SignUpForm";
import Nav from "../Navbar/Nav";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Toutes les catégories");
  const [activeModal, setActiveModal] = useState("search"); // Track active modal
  const [activeForm, setActiveForm] = useState("signIn"); // Track active form

  const toggleModal = (type) => {
    setActiveModal(type);
    setIsModalOpen(!isModalOpen);
  };

  const switchToSignUp = () => setActiveForm("signUp");
  const switchToSignIn = () => setActiveForm("signIn");

  const categories = [
    "Toutes les catégories",
    "Accessoires Dressing",
    "Accessoires Cuisine",
    "Accessoires Porte",
    "Outillage",
  ];

  return (
    <>
      {/* Header Section */}
      <header className="bg-[#c5c5c5] shadow-md p-4 px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-4xl font-bold">
          <span className="text-red-600">A</span>
          <span className="text-gray-500">M</span>
          <span className="text-gray-500">E</span>
        </div>

        {/* Search Section */}
        <div className="relative flex-grow mx-10 max-w-2xl">
          <input
            type="text"
            placeholder="Cherchez un produit, une catégorie, ou un accessoire..."
            className="w-full border border-gray-400 px-4 py-2 rounded-lg pl-10 text-sm bg-white focus:ring focus:ring-red-300"
            onClick={() => toggleModal("search")}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>

        {/* Wishlist, Cart, and Account Section */}
        <div className="flex items-center space-x-6 text-gray-700">
          {/* Wishlist */}
          <button className="flex items-center hover:text-red-600">
            <GoHeart className="text-lg" />
            <span className="ml-2 hidden md:inline">Favoris</span>
          </button>

          {/* Cart */}
          <button className="flex items-center hover:text-red-600">
            <FaOpencart className="text-lg" />
            <span className="ml-2 hidden md:inline">Panier</span>
          </button>

          {/* Account */}
          <button className="flex items-center hover:text-red-600" onClick={() => toggleModal("auth")}>
            <FaRegUser className="text-lg" />
            <span className="ml-2 hidden md:inline">Compte</span>
          </button>
        </div>
      </header>

      {/* Navigation Bar */}
      <Nav />

      {/* Modal Section */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-xl relative transform transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "90vh" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto" style={{ maxHeight: "85vh" }}>
              {/* Modal Content */}
              {activeModal === "search" && (
                <div className="flex flex-col items-center">
                  <div className="flex items-center w-full gap-4">
                    {/* Search Input in Modal */}
                    <input
                      type="text"
                      placeholder="Cherchez un produit ou accessoire"
                      className="border px-4 py-2 rounded-md flex-grow focus:outline-none"
                      style={{ height: "42px" }}
                    />

                    {/* Dropdown for Categories */}
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="border px-4 py-2 rounded-md focus:outline-none"
                      style={{ height: "42px" }}
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
                    <img src="/sr.png" alt="Hardware Illustration" className="mx-auto w-56" />
                  </div>
                  <h2 className="text-xl font-bold mt-4">Comment pouvons-nous vous aider aujourd'hui?</h2>
                  <p className="text-gray-600 mt-2">Explorez nos produits, catégories, et accessoires de maison.</p>
                </div>
              )}

              {activeModal === "auth" && (
                <div className="flex flex-col items-center">
                  {activeForm === "signIn" && (
                    <>
                      <SignInForm />
                      <p className="text-sm mt-4">
                        Vous n'avez pas de compte?{" "}
                        <button className="text-blue-500 hover:underline" onClick={switchToSignUp}>
                          S'inscrire
                        </button>
                      </p>
                    </>
                  )}
                  {activeForm === "signUp" && (
                    <>
                      <SignUpForm />
                      <p className="text-sm mt-4">
                        Vous avez déjà un compte?{" "}
                        <button className="text-blue-500 hover:underline" onClick={switchToSignIn}>
                          Se Connecter
                        </button>
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
