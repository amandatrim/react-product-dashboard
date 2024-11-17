import React, { useState } from 'react';

// Component for adding a new product
const AddProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass new product data to parent component
        addProduct({ name, price: parseFloat(price), description });
        // Clear the form fields after submission
        setName('');
        setPrice('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <h2>Add New Product</h2>
            {/* Product Name input */}
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            {/* Product Price input */}
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            {/* Product Description input */}
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            {/* Submit button */}
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
