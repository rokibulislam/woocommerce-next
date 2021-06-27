import React, { useState, useEffect } from 'react'
import DefaultLayout from "../layout/Layout";
import Router from  'next/router'
import { connect } from 'react-redux'
import LoginForm from "../components/my-account/LoginForm";

const Login = (props) => {
    const [pageLoading,setPageLoading] = useState(true)
    
    useEffect( () => {

    }, []);

    return (
        <DefaultLayout>
            <LoginForm/>
        </DefaultLayout>
    )
}

export default Login;