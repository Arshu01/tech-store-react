// ProductGrid.jsx
// Takes the already-filtered/sorted product list and renders one
// ProductCard per product. Doesn't do any filtering itself.

import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  wishlist,
  addToCart,
  toggleWishlist,
}) {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((data) => (
        <ProductCard
          key={data.id}
          id={data.id}
          image={data.image}
          name={data.name}
          price={data.price}
          originalPrice={data.originalPrice}
          discount={data.discount}
          rating={data.rating}
          isBestSeller={data.isBestSeller}
          isWishlisted={wishlist.includes(data.id)}
          onAddToCart={() => addToCart(data)}
          onToggleWishlist={() => toggleWishlist(data.id)}
        />
      ))}
    </div>
  );
}
