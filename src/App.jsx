import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'iPhone 16', price: 100, description: 'Best phone on the market' },
        { id: 2, name: 'Apple iWatch', price: 2200, description: 'Best smart watch on the market' },
        { id: 2, name: 'Surface Laptop 4', price: 240, description: 'Best surface laptop on the market' },
        { id: 2, name: 'Samsung Galaxy s23 Ultra', price: 300, description: 'One of the best android phones out there' },
        { id: 2, name: 'Nike Vapor Max', price: 500, description: 'Best trainers on the market' }
    ]);

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: Date.now() }]);
    };

    return (
        <div>
            <h1>Product Dashboard</h1>
            <AddProductForm addProduct={addProduct} />
            <ProductList products={products} />
        </div>
    );
};

export default App;
