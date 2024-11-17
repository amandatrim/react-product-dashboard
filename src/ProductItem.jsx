/* Import React from react */
import React from 'react';

const ProductItem = ({ product }) => {
    return (
        /* Display all the information of the product being passed as a prop */
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductItem;
