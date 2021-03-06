import React, { useState, useEffect } from 'react'
import Link from "next/link";

const ParentCategory = ({category}) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
            <div className="category__item">
                <Link
                    href={
                        {
                            pathname: "/product-category/[category]",
                            query:{ productCategory: JSON.stringify(category) }
                        }
                    }
                    as={`/product-category/${category.id}`}
                >
                    <a>
                        <img
                        src={
                            null !== category.image
                            ? category.image.src
                            : "/static/images/placeholder.png"
                        }
                        alt={category.name}
                        />
                        <h4 className="category__label text-center">
                        {category.name} <small>({category.count})</small>
                        </h4>
                    </a>
                </Link>
            </div>

            <style jsx>{`
                .category__item {
                text-align: center;
                border-radius: 5px;
                box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06);
                }
                .category__item a {
                display: block;
                padding: 32px;
                }
                .category__label {
                margin-top: 10px;
                }
                .category__item img {
                box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.06);
                width: 130px;
                height: 95px;
                margin-bottom: 10px;
                }
            `}</style>
        </div>
        
    )
}

export default ParentCategory