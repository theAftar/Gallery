function CategoryFilter({ activeCategory, setActiveCategory }) {
  const categories = [
    "All",
    "Nature",
    "Travel",
    "Animals",
    "Architecture",
  ];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;