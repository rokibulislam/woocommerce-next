import React, { useState, useEffect } from 'react'
import Link from "next/link";

const ProductTag = ({tag}) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
            <div className="tag__item">
                <Link
                    href={
                        {
                            pathname: `/product-tag/${tag.id}`,
                            query:{ producttag: JSON.stringify(tag) }
                        }
                    }
                    as={`/product-tag/${tag.id}`}
                >
                    <a>
                        <h4 className="tag__label text-center">
                        {tag.name} <small>({tag.count})</small>
                        </h4>
                    </a>
                </Link>
            </div>

            <style jsx>{`
                .tag__item {
                text-align: center;
                border-radius: 5px;
                box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06);
                }
                .tag__item a {
                display: block;
                padding: 32px;
                }
                .tag__label {
                margin-top: 10px;
                }
                .tag__item img {
                box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.06);
                width: 130px;
                height: 95px;
                margin-bottom: 10px;
                }
            `}</style>
        </div>
        
    )
}

export default ProductTag