import Link from "next/link";
import { connect } from "react-redux";

import AddToCartButton from "../../components/cart/AddToCartButton";

const Product = ({ product }) => {
    console.log(product);
    return (
        <>
            {/* <Link
                href={{
                    pathname: "/product/[slug]",
                    query: { productData: JSON.stringify(product) }
                }}
                as={`/product/${product.slug}`}
            >
                <a>
                    {product.images && product.images.length > 0 ? (
                        <img src={product.images[0].src} alt={product.name} />
                    ) : (
                        <img src="/static/images/placeholder.png" alt={product.name} />
                    )}
                </a>
            </Link>
            */}
            <ul>
                {
                    product.categories.map( category => {
                        return (
                        <>
                            <li>
                                <Link
                                    href={
                                        {
                                            pathname: "/product-category/[category]",
                                            query:{ productCategory: JSON.stringify(category) }
                                        }
                                    }
                                    as={`/product-category/${category.slug}`}
                                > 
                                {category.name}
                                </Link>  
                            </li>
                        </> 
                        )
                    } )
                }
            </ul>

            <ul>
                {
                    product.tags.map( tag => {
                        return (
                        <>
                            <li>
                                <Link
                                    href={
                                        {
                                            pathname: "/product-tag/[tag]",
                                            query:{ productTag: JSON.stringify(tag) }
                                        }
                                    }
                                    as={`/product-tag/${tag.slug}`}
                                > 
                                {tag.name}
                                </Link>  
                            </li>
                        </> 
                        )
                    } )
                }
            </ul>

            <div
                className="product__price"
                dangerouslySetInnerHTML={{ __html: product.price_html }}
            ></div>

            <div>
            <AddToCartButton product={product} />
            </div>
        </>
    )
}

export default Product