import React from 'react';

export default function Menu() {
    const menu = [
        { id: 1, url: "/", name: "HOME" },
        { id: 2, url: "/genre-list", name: "GENRES" },
        { id: 3, url: "/about", name: "ABOUT" },
    ];

    return(
        <nav>
            <ul>
                {menu && menu.map(itemMenu => (
                    <li key={ itemMenu.id }>
                        <a href={`${ itemMenu.url }`}>{ itemMenu.name }</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}