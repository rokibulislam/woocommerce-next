import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../layout/Layout'

const Shop = props => {
    useEffect( () => {})

    return (
        <DefaultLayout>
            Shop Pages
        </DefaultLayout>
    )
}

Shop.getInitialProps = async (ctx) => {
    return {
        
    }
};

export default Shop;