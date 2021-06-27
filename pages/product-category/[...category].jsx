import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../layout/Layout'
import Product from "../../components/products/Product";
import { useRouter } from 'next/router'
import wcRequest  from "../../api/Woocommerce";

const ProductCategory = props => {
    let { query } = useRouter();
    const [items, setItems] = useState([]);

    useEffect( async () => {
        let id = query.category;

        if ( id != undefined ) {
            const response = await wcRequest(`products`, { tag: id } );
            setItems(response.data);
        }
    }, [query.category ]);

    return (
        <DefaultLayout>
            <div className="row">
                {
                    items.length > 0 && items.map((product, index) => (
                        <div className="col-sm-4 col-xs-12" key={index}>
                            <Product product={product} />
                        </div>
                    ))
                }
            </div>
        </DefaultLayout>
    )
}

export default ProductCategory;