"use client"

import Image from "next/image";
import NavItem from "./item";
import { Menu, X } from "react-feather";
import React from "react";

const Navbar = () => {
    const [toogle, setToogle] = React.useState(false);

    const handlerToogle = () => {
        setToogle(!toogle);
    }

    return (
        <>
            <nav className="container flex justify-between items-center py-3 md:py-6">
                <div className="w-28 md:w-44 h-16 relative">
                    <Image src={"/images/logo-deles.png"} alt="logo-mafia-pentol" className="-full h-full top-0 left-0 rounded-full" objectFit="contain" fill/>
                </div>
                <button 
                    className="block md:hidden"
                    onClick={handlerToogle}
                >
                    {<Menu size={28} />}
                </button>
                <ul className="md:flex flex-row space-x-5 hidden">
                    <NavItem href={"#"}>Beranda</NavItem>
                    <NavItem href={"#katalog"}>Katalog</NavItem>
                    <NavItem href={"#testimoni"}>Testimoni</NavItem>
                    <NavItem href={"#tentang"}>Tentang</NavItem>
                    <NavItem href={"#kontak"}>Kontak</NavItem>
                </ul>
            </nav>
            <div className={`fixed h-screen w-full bg-white-50 z-50 inset-0 overflow-hidden p-10 ${toogle ? 'block' : 'hidden'}`}>
                <button 
                    className="absolute right-10 top-10 block md:hidden"
                    onClick={handlerToogle}
                >
                    {<X size={28} />}
                </button>
                <ul className="flex flex-col space-y-5 md:hidden">
                    <NavItem href={"#"} onClick={handlerToogle}>Beranda</NavItem>
                    <NavItem href={"#katalog"} onClick={handlerToogle}>Katalog</NavItem>
                    <NavItem href={"#testimoni"} onClick={handlerToogle}>Testimoni</NavItem>
                    <NavItem href={"#tentang"} onClick={handlerToogle}>Tentang</NavItem>
                    <NavItem href={"#kontak"} onClick={handlerToogle}>Kontak</NavItem>
                </ul>
            </div>
        </>
    )
}

export default Navbar;