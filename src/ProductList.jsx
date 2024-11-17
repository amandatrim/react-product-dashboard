import React from 'react';
/* Import productItem from the product item module  */
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Product List</h2>
            {products.map((product) => (
                /* pass the props to the ProductItem component */
               <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

/* Export the ProductList component */

export default ProductList;
