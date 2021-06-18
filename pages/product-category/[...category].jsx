import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../layout/Layout'

const ProductCategory = props => {

    useEffect( () => {

    }, [])

    return (
        <DefaultLayout>
            Product Category
        </DefaultLayout>
    )
}

ProductCategory.getInitialProps = async (ctx) => {
    return {
        
    }
}

export default ProductCategory;