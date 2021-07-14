import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import DefaultLayout from "../layout/Layout";

import wcRequest  from "../api/Woocommerce";

import Product from "../components/products/Product";

const Index = props => {
  const[categories,setCategories] = useState([]);
  const[latestProducts,setLatestProducts] = useState([]);
  const[featuredProducts,setFeaturedProducts] = useState([]);
  const[topRatedProducts,setTopRatedProducts] = useState([]);
  const[popularProducts,setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect( async () => {
      const productCategories = await wcRequest("products/categories/?parent=0&per_page=8");

      const latestProducts   = await wcRequest('products/?per_page=20');
      const featuredProducts = await wcRequest('products/?featured=true&per_page=20');
      const topRatedProducts = await wcRequest("products/?orderby=rating&per_page=20");
      const popularProducts  = await wcRequest("products/?orderby=popularity&per_page=20");

      setLatestProducts(latestProducts.data);
      setFeaturedProducts(featuredProducts.data);
      setTopRatedProducts(topRatedProducts.data);
      setPopularProducts(popularProducts.data);
      setLoading(false);

      setCategories(productCategories.data);
  
    }, [] );

  return (
  <DefaultLayout>
    <div>
      <ul>
        {
          categories.map( category => (
              <li>
                  {category.name}
              </li>
            )
          )
        }
      </ul>
      <div className="row">
        {
          popularProducts.map( (product, index) => (
            <div className="col-sm-4 col-xs-12" key={index}>
              <Product product={product} />
            </div>
          ))
        }
      </div>
      
    </div>
  </DefaultLayout>
  )
}

export default Index;