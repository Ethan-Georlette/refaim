import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import logo from '../assets/img/refaim.png'

export function AppHeader() {
    return (

        <header className='flex '>
            <div className="btns flex align-center">
                <button className="contribute">
                    תרומה
                </button>
                <button className="signin">
                    הצטרפות לעמותה
                </button>
            </div>
            <div className="links flex align-center">
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "link active" : "link")}>
                    צור קשר
                </NavLink>
                <NavLink to="/refaim" className={({ isActive }) => (isActive ? "link active" : "link")}>
                    יחידה סדירה
                </NavLink>
                <div className="dropdown flex column">
                    <NavLink to="/contribute" className={({ isActive }) => (isActive ? "link active" : "link")}>
                        פעילות בקהילה
                    </NavLink>
                    <div className="dropdown-items">
                        <a href="">אירועים</a>
                        <a href="">מורשת היחידה</a>
                        <a href="">גלריה</a>
                    </div>
                </div>

                <div className="dropdown flex column">
                    <NavLink to="/community" className={({ isActive }) => (isActive ? "link active" : "link")}>
                        קהילה
                    </NavLink>
                    <div className="dropdown-items">
                        <a href="">פעילויות קהילה</a>
                        <a href="">הרצאות ומפגשים</a>
                        <a href="">סטודנטים</a>
                        <a href="">הצעות עבודה</a>
                    </div>
                </div>
                <div className="dropdown flex column">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "link active" : "link")}>
                        על העמותה
                    </NavLink>
                    <div className="dropdown-items">
                        <a href="#vision">חזון העמותה</a>
                        <a href="#objectives">מטרות העמותה</a>
                        <a href="#media">היחידה במדיה</a>
                        <a href="">שקיפות ומנהל תקין</a>
                    </div>
                </div>
                <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
                    בית
                </NavLink>
            </div>
            <div className="logo">
                <img src={logo} alt="refaim-symbol" />
            </div>
        </header>
    )

}