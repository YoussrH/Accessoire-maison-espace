"use client";

import React from "react";
import styles from "./Nav.module.css";
import { BsMenuApp } from "react-icons/bs";
import {  Instagram, Twitter, Search, User } from "lucide-react";
import { TbShoppingBagSearch } from "react-icons/tb";
import { RiHeart3Line } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
export default function Nav() {
  return (
    <div className={styles.navContainer}>
      {/* Top Section: Social Media Icons, Logo, Language Selection */}
      <div className={styles.topSection}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <LuFacebook size={20} className={styles.icon} />
          <Instagram size={20} className={styles.icon} />
          <Twitter size={20} className={styles.icon} />
        </div>

        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src="/Group 10.svg" alt="Logo" width={100} height={50} />
        </div>

        {/* Language Selection */}
        <div className={styles.languageSelector}>
          <span>FR</span> | <span>EN</span>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className={styles.horizontalLine}></div>

      {/* Navbar */}
        <div className={styles.menuBar}>
        <div className={styles.navLinks}>
            <b className={styles.navItem}>
                Exclusif <span className={styles.dot}></span>
            </b>
            <b className={styles.navItem}>
                Nouveaux arrivages   <img src="/new.png" alt="Highlight" className={styles.starImage} />
            </b>
            <b className={styles.navItem}>
                En bois <span className={styles.dot}></span>
            </b>
            <b>Vitrine</b>
            <b>Accessoires</b>
            <b>Contact</b>
</div>


        {/* Search Bar */}
        <div className={styles.searchBar}>
        <Search size={18} className={styles.searchIcon} />
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <span className={styles.separator}>|</span>
        <BsMenuApp  size={24} className={styles.menuIcon} />
        </div>

        {/* Icons: Cart, Wishlist, Avatar */}
        <div className={styles.userIcons}>
          <TbShoppingBagSearch size={24} className={styles.icon} />
          <RiHeart3Line size={24} className={styles.icon} />
          <User size={24} className={styles.icon} />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className={styles.horizontalLine}></div>
    </div>
  );
}
