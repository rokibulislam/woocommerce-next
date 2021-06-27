import { useState, useEffect } from 'react'
import axios from "axios";

const AddToCartButton = ( { product } ) => {

    useEffect( () => {
        
    }, [] )

    const handleAddToCartClick = async id => {
        console.log(id);
        let postData = {
            product_id: id,
            quantity: 1
        };

        await new Promise((resolve, reject) => {
            axios.post('http://wpcontact.test/wp-json/wc/v3/cart/items', postData ).then(response => {
        
              if (response.status === 200) {
                if (!localStorage.getItem('wcSession')) {
                  localStorage.setItem('wcSession', response.headers['x-wc-session']);
                }
                resolve(response.data);
              } else {
                reject(response);
              }
            }).catch(err => {
              console.log(err);
            })
          })
    }

    return (
        <>
             { (product.type === "simple") && (
                <>
            <button
                onClick={e => handleAddToCartClick(product.id)}
                className="btn btn--primary mr-10"
            >
                Add to cart
                <i className="fas fa-spinner fa-spin ml-10"></i>
            </button>
                </>
             )}
        </>
    )
}

export default AddToCartButton;