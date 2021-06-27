import { useState, useEffect } from 'react'
import { connect } from "react-redux";
import Router from "next/router";

const ShopLayout = (props) => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            Shop
            {props.children}
        </>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default ShopLayout;