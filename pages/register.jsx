import React, { useState, useEffect } from 'react'
import DefaultLayout from "../layout/Layout";
import RegisterForm from "../components/my-account/RegisterForm";

const Register = props => {

    useEffect( () => {})

    return (
        <DefaultLayout>
            <RegisterForm/>
        </DefaultLayout>
    )
}

export default Register;