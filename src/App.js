import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setsort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);
  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };
  const sortHandler = (e) => {
    setsort(e.target.value);
  };

  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  ///////////////////////////////
  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };
  const sortDate = (array) => {
    const sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };
  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

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
          <Filter
            onSort={sortHandler}
            onSearch={searchHandler}
            sort={sort}
            searchValue={searchValue}
            categories={categories}
            onSelectCategory={selectCategoryHandler}
            selectedCategory={selectedCategory}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
