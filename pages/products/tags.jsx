import React, { useState, useEffect } from 'react'
import wcRequest  from "../../api/Woocommerce";
import DefaultLayout from '../../layout/Layout'
import ProductTag from '../../components/products/ProductTag'


const AllTags = ( { tags } ) => {
    return (
        <DefaultLayout>
            <div className="inside__article">
                <div className="container">
                    <h2 className="pb-20">Product Tags</h2>
                    <div className="row">
                        {
                            tags.length > 0 ? (
                                tags.map(tag => (
                                    <ProductTag
                                        key={tag.id}
                                        tag={tag}
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
    const response = await wcRequest('products/tags');
    return {
      props: {
          tags: response.data
      }, 
    }
  }


export default AllTags;