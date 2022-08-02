import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div className="bg-green-100 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category categories={categories} setCategories={setCategories} />
          <Products
            categories={categories}
            products={products}
            setProducts={setProducts}
          />
          <ProductList products={products} categories={categories} setProducts={setProducts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
