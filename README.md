# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---

# Product Dashboard

A simple React application for managing a list of products. Users can add new products with a name, price, and description. The app dynamically updates the product list as new products are added.

## Features

- **Add Product**: Users can add new products by filling out a form with the product's name, price, and description.
- **Product List**: A list of all added products is displayed, showing the name, price, and description.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **React Hooks**: Used for managing state (`useState`) and handling user input.
  
## Installation

### Prerequisites

- **Node.js** and **npm** should be installed. You can download and install them from [here](https://nodejs.org/).

### Steps to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/product-dashboard.git
    cd product-dashboard
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

    Your app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

- **Add New Product**: Fill out the form and click "Add Product" to add a product to the list.
- The product list will automatically update with the new product details.

## File Structure

```
/product-dashboard
  /src
    /components
      AddProductForm.jsx      # Form for adding new products
      ProductList.jsx         # Displays the list of products
    App.jsx                   # Main component that manages state
    index.js                  # Entry point of the application
  package.json                # Project dependencies and scripts
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

