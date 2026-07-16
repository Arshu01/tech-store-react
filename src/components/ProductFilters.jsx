// ProductFilters.jsx
// Search box + brand dropdown + sort dropdown + the mini cart summary bar.
// All the actual filtering/sorting logic still happens in App.jsx — this
// component only shows the controls and reports changes back up via props.

export default function ProductFilters({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  allBrands,
  sortBy,
  onSortChange,
  cartCount,
  cartTotal,
  onCartSummaryClick,
}) {
  return (
    <>
      <div className="filter-controls">
        {/* Search Input */}
        <div className="filter-group">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Brand Filter */}
        <div className="filter-group">
          <select
            value={selectedBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Brands</option>
            {allBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="filter-group">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="filter-select"
          >
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Cart Summary */}
      {cartCount > 0 && (
        <div className="cart-summary" onClick={onCartSummaryClick}>
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ verticalAlign: "middle", marginRight: "8px" }}
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Cart: {cartCount} items
          </span>
          <span className="cart-total">
            Total: ₹{cartTotal.toLocaleString()}
          </span>
        </div>
      )}
    </>
  );
}
