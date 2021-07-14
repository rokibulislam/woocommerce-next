import { useState, useEffect } from 'react'
import { connect } from "react-redux";
import Link  from 'next/router'

const links = [
	{ href: "/", label: "Home" },
	{ href: "/products/categories", label: "Categories" },
	{ href: "/shop", label: "Shop" },
	{ href: "/checkout", label: "Checkout" }
];


const Nav = props => {
    return (
        <nav className="site__nav">
            <ul>
            {
                links.map( (item,index) => (
                    <li key={index}>
                        <a href={item.href} > {item.label} </a>
                    </li>
                ))
            }
            </ul>
        </nav>
    )
}

export default Nav;