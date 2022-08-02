const Filter = ({
  onSort,
  onSearch,
  sort,
  searchValue,
  categories,
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-green-900 text-lg">
          search
        </label>
        <input
          onChange={onSearch}
          value={searchValue}
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded-xl border border-green-500 text-green-900"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-green-900 text-lg">
          sort
        </label>
        <select
          onChange={onSort}
          value={sort}
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-green-900 rounded-xl border border-green-500"
        >
          <option className="bg-green-500 text-green-300" value="">
            select a category
          </option>
          <option className="bg-green-500 text-green-300" value="latest">
            latest
          </option>
          <option className="bg-green-500 text-green-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-green-900 text-lg">
          Category
        </label>
        <select
          onChange={onSelectCategory}
          value={selectedCategory}
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-green-900 rounded-xl border border-green-500"
        >
          <option className="bg-green-500 text-green-300" value="">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className="bg-green-500 text-green-300"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
