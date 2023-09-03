import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../assets/img/refaim-removebg-preview.png'

export function AppFooter() {
    return (
        <footer className='flex column center'>
            <div className="all flex space-between align-center">
                <div className="contact flex">
                    <a className='fab fa-facebook' href=""></a>
                    <a className='fab fa-instagram' href=""></a>
                    <a className='fas fa-envalope' href="mailto:ethan.georlette1@gmail.com"></a>
                </div>
                    {/* <div className="flex column">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
                            בית
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "link active" : "link")}>
                            על העמותה
                        </NavLink>
                        <NavLink to="/community" className={({ isActive }) => (isActive ? "link active" : "link")}>
                            קהילה
                        </NavLink>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
                            יחידה סדירה
                        </NavLink>
                    </div> */}
                    <div className="logo">
                <img src={logo} alt="refaim-symbol" />
            </div>
            </div>
            <span>Ⓒכל הזכויות שמורות לעמותת רפאים</span>
        </footer>
    )
}