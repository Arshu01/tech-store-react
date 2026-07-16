// CartSidebar.jsx
// The slide-in cart panel. All cart DATA (cartItems, cartCount, cartTotal) and
// cart ACTIONS (updateQuantity, removeFromCart) still live in App.jsx — this
// component just receives them as props and displays/triggers them.

export default function CartSidebar({
  isCartOpen,
  onClose,
  cartItems,
  cartCount,
  cartTotal,
  updateQuantity,
  removeFromCart,
}) {
  return (
    <>
      {/* Overlay - dark background behind the sidebar */}
      {isCartOpen && <div className="cart-overlay" onClick={onClose}></div>}

      <aside className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-sidebar-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p>Your cart is empty</p>
              <button className="btn-primary" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">
                      ₹{item.price.toLocaleString()}
                    </p>
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-subtotal">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-totals">
              <div className="cart-totals-row">
                <span>Subtotal ({cartCount} items)</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="cart-totals-row">
                <span>Shipping</span>
                <span className="free-shipping">FREE</span>
              </div>
              <div className="cart-totals-row total">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </aside>
    </>
  );
}
