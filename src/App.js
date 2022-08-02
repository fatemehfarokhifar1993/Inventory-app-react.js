import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <div className="bg-green-100 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category categories={categories} setCategories={setCategories} />
          <Products categories={categories}/>
        </div>
      </div>
    </div>
  );
}

export default App;
