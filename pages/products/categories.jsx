import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../layout/Layout'

const AllCategories = props => {

    useEffect( () => {})

    return (
        <DefaultLayout>
            Categories
        </DefaultLayout>
    )
}

AllCategories.getInitialProps = async (ctx) => {
    return {
  
    }
}

export default AllCategories;