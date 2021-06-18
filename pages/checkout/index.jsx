import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import DefaultLayout from '../../layout/Layout'

const Checkout = props => {

    useEffect( () => {

    }, [] )

    return (
        <DefaultLayout>
            Checkout Page
        </DefaultLayout>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default Checkout;