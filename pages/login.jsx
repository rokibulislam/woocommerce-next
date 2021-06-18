import React, { useState, useEffect } from 'react'
import DefaultLayout from "../layout/Layout";

const Login = props => {
    const [pageLoading,setPageLoading] = useState(true)
    
    useEffect( () => {

    }, []);

    return (
        <DefaultLayout>
            Login
        </DefaultLayout>
    )
}

export default Login;