import { useState } from "react";

const Category = ({ categories, setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormDate, setCategoryFormDate] = useState({
    title: "",
    description: "",
  });
  const changeHandler = (e) => {
    setCategoryFormDate({
      ...categoryFormDate,
      [e.target.name]: e.target.value,
    });
  };
  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories([
      ...categories,
      {
        ...categoryFormDate,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setCategoryFormDate({ title: "", description: "" });
  };
  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-green-900 font-bold mb-2">
          Add New category
        </h2>
        <form
          className="bg-green-300 p-4 rounded-xl flex flex-col gap-y-4"
          onSubmit={addNewCategoryHandler}
        >
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-green-900"
            >
              title
            </label>
            <input
              onChange={changeHandler}
              name="title"
              value={categoryFormDate.title}
              type="text"
              id="category-title"
              className="bg-transparent rounded-xl border border-green-900 text-green-900 w-full md:w-auto"
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-green-900"
            >
              description
            </label>
            <textarea
              onChange={changeHandler}
              name="description"
              value={categoryFormDate.description}
              className="bg-transparent rounded-xl border border-green-900 text-green-900 w-full"
              type=" text"
              id="category-description"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-green-900 text-green-900 rounded-xl py-2"
              id="cancel-add-category"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-green-900 text-green-100 rounded-xl py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        type="submit"
        onClick={() => setIsShow(!isShow)}
        id="toggle-add-category"
        className={`text-green-900 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
      >
        Add new Category?
      </button>
    </section>
  );
};

export default Category;
