import { useState, useEffect } from "react";
import products from "./data";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CartSidebar from "./components/CartSidebar";
import ProductFilters from "./components/ProductFilters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  //BRANDS
  const allBrands = [...new Set(products.map((p) => p.brand))];

  // State
  // Cart - array of products in cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("techstore-cart");

    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Problem!!!", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("techstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Wishlist - array of product IDs that are wishlisted
  const [wishlist, setWishlist] = useState([]);

  // Search - what user types in search box
  const [searchTerm, setSearchTerm] = useState("");

  // Brand Filter - which brand is selected ('All' means show all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Sort - how to sort products
  const [sortBy, setSortBy] = useState("default");

  // Cart Sidebar - open/close state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Theme - dark or light mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      setWishlist([...wishlist, productID]);
    }
  }

  //STEP 1 : FILTER BASED ON SEARCH [BASED ON NAME AND BRAND]
  let filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  //STEP 2 : SORT BASED ON FILTERED PRODUCTS
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="app">
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        wishlistCount={wishlist.length}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <CartSidebar
        isCartOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartCount={cartCount}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <Hero />

      <section className="products-section" id="products">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>

        <ProductFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedBrand={selectedBrand}
          onBrandChange={setSelectedBrand}
          allBrands={allBrands}
          sortBy={sortBy}
          onSortChange={setSortBy}
          cartCount={cartCount}
          cartTotal={cartTotal}
          onCartSummaryClick={() => setIsCartOpen(true)}
        />

        <ProductGrid
          products={filteredProducts}
          wishlist={wishlist}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
        />
      </section>

      <Footer />
    </div>
  );
}

export default App;
