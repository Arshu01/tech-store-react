// Navbar.jsx
// Shows: logo, nav links, theme toggle, wishlist icon, cart icon, sign in / shop now buttons
// It doesn't own any state itself — everything it needs is passed in as props from App.jsx

export default function Navbar({
  isDarkMode,
  onToggleTheme,
  wishlistCount,
  cartCount,
  onCartClick,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          <span className="logo-icon">◆</span>
          TechStore
        </a>

        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Deals
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            className="nav-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <div
              className={`theme-toggle-track ${isDarkMode ? "dark" : "light"}`}
            >
              <div className="theme-toggle-thumb">
                {isDarkMode ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </div>
            </div>
          </button>

          {/* Wishlist Button */}
          <button className="nav-btn icon-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={wishlistCount > 0 ? "#ef4444" : "none"}
              stroke={wishlistCount > 0 ? "#ef4444" : "currentColor"}
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </button>

          {/* Cart Button with Icon */}
          <button className="nav-btn icon-btn" onClick={onCartClick}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>

          <button className="nav-btn">Sign In</button>
          <button className="nav-btn primary">Shop Now</button>
        </div>
      </div>
    </nav>
  );
}
