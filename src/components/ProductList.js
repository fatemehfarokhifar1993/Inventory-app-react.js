const ProductList = ({ products, categories, setProducts }) => {
  const findCategory = (catrgoryId) => {
    return categories.find((category) => category.id === parseInt(catrgoryId))
      .title;
  };
  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
  };
  return (
    <div>
      <h2 className="text-xl text-green-900 font-bold mb-2">ProductList</h2>
      <div className=" overflow-x-auto ">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center justify-between mb-2 w-full min-w-[400px]"
            >
              <span className="text-green-900">{product.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-green-900">
                  {new Date(product.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-green-900 border border-green-500 text-sm rounded-2xl">
                  {findCategory(product.catrgoryId)}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-900 border-2 border-green-200 text-green-200">
                  {product.quantity}
                </span>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="border px-2 py-o.5 rounded-2xl border-red-700 text-red-700"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
