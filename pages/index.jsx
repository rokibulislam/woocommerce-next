import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DefaultLayout from "../layout/Layout";

const Home = (props) => {

  useEffect( () => {

  }, [] );

  return (
  <DefaultLayout>
    <div className={styles.container}>
      main content
    </div>
  </DefaultLayout>
  )
}

Home.getInitialProps = async (ctx) => {

  return {

  }
}

export default Home;