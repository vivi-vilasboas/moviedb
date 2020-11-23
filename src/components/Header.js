import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

export default function Header(){
    return(
        <>
            <header>
                <a href='/' className='logo'>Logo</a>

                <div className='menu-container'>
                    <SearchBar /> 

                    <Menu />
                </div>
            </header>
        </>
    )
}