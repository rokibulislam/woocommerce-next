import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import wcRequest  from "../../api/Woocommerce";

import Product from "../../components/products/Product";

const ProductListPage = (props) => {
    const router = useRouter();
    const [items, setItems] = useState([]);

    useEffect( async () => {
        const response = await wcRequest('products/');
        setItems(response.data);
    },['items'])


    return (
        <div className="row">
            {
                items.map((product, index) => (
                    <div className="col-sm-4 col-xs-12" key={index}>
                        <Product product={product} />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductListPage;