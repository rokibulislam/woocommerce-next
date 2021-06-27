import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import DefaultLayout from "../layout/Layout";

const Index = props => {

  useEffect( () => {
    async function fetchProductCategories() {
      
    }

    fetchProductCategories();
  }, [] );

  return (
  <DefaultLayout>
    <div>
      main content
    </div>
  </DefaultLayout>
  )
}

export default Index;