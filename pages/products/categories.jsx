import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../layout/Layout'

import wcRequest  from "../../api/Woocommerce";

import ParentCategory from '../../components/products/ProductCategory'

const AllCategories = ( { categories }) => {
    return (
        <DefaultLayout>
            <div className="inside__article">
                <div className="container">
                    <h2 className="pb-20">Product Categories</h2>
                    <div className="row">
                    {
                        categories.length > 0 ? (
                            categories.map(productCategory => (                 
                            <ParentCategory
                                key={productCategory.id}
                                category={productCategory}
                            /> 
                            ) 
                        )
                        ) : ( 
                            <div className="col-sm-12">No category found!</div>
                        )
                    }
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}


  export async function getStaticProps(context) {
    const response = await wcRequest('products/categories');
    return {
      props: {
          categories: response.data
      }, 
    }
  }

export default AllCategories;