import React, { useState } from 'react';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="  flex shadow-lg place-content-between border border-b-4 border-black w-3/4 bg-[#f9f6ee] mx-auto mt-8 h-20 rounded-2xl items-center rounded-xl">
            <div className="ml-10">
            <nav className="flex list-none space-x-10 md:flex  hidden">
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#home">Home</a></li>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#about">About</a></li>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#skills">Skills</a></li>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#blog">Blog</a></li>
                    <li><a  className="hover:text-[#C5001B] transition-colors" href="#contact">Contact</a></li>
                </nav>
            </div>
            <div className="mr-auto md:hidden text-2xl" onClick={handleMenuClick}>
                {isMenuOpen ? <GiCancel /> : <GiHamburgerMenu />}
            </div>
            <div className="mr-10">
                <h1 className="text-3xl font-bold">Matin</h1>
            </div>

            {isMenuOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'left', alignItems: '' }}>
                    <div style={{ width: 250, height: 800, backgroundColor: '#F8F6EE', textAlign: 'center' }}>

                    <nav className="font-bold list-none space-y-10 mt-40 text-xl">
                    <button className='text-4xl hover:text-[#C5001B] transition-colors' onClick={handleCloseClick}><IoIosCloseCircleOutline /></button>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#">Home</a></li>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#">About</a></li>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#">Skills</a></li>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#">Blog</a></li>
                    <li><a className="hover:text-[#C5001B] transition-colors" href="#">Contact</a></li>
                </nav>
 

                    </div>
                    </div>
          
                
            )}
        </div>
    );
}

export default Navbar;
