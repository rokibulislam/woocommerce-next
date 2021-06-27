import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const MiniCart = () => {
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(false);
    }, []);

    const handleRemoveItemFromCart = async key => {
        
    }

    return (
        <li className="cart_menu dropdown">
            <div className="dropdown__menu">

            </div>
        </li>
    )
}