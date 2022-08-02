import { useState } from "react";

const Products = ({ categories }) => {
  const [productFormDate, setProductFormDate] = useState({
    title: "",
    quantity: 0,
    catrgoryId: "",
  });

  const [products, setProducts] = useState([]);
  const changeHandler = (e) => {
    setProductFormDate({
      ...productFormDate,
      [e.target.name]: e.target.value,
    });
  };
  const addNewProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...productFormDate,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setProductFormDate({ title: "", quantity: 0, catrgoryId: "" });
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl text-green-900 font-bold mb-2">Add New Product</h2>
      <form className="bg-green-300 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-green-900">
            title
          </label>
          <input
            onChange={changeHandler}
            value={productFormDate.title}
            type="text"
            name="title"
            id="product-title"
            className="bg-transparent rounded-xl border border-green-900 text-green-900 w-full md:w-auto"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-green-900"
          >
            quantity
          </label>
          <input
            onChange={changeHandler}
            value={productFormDate.quantity}
            className="bg-transparent rounded-xl border border-green-900 text-green-900 w-full md:w-auto"
            type="number"
            name="quantity"
            id="product-quantity"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-green-900"
          >
            category
          </label>
          <select
            onChange={changeHandler}
            value={productFormDate.catrgoryId}
            name="catrgoryId"
            id="product-category"
            className="bg-transparent text-green-900 rounded-xl w-full"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-green-600 text-green-100"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={addNewProduct}
            id="add-new-product"
            className="flex-1 bg-green-900 text-green-100 rounded-xl py-2"
          >
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Products;
