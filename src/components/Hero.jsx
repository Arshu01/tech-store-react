// Hero.jsx
// The big banner section at the top. It's fully static (no props needed)
// because none of its content depends on state.

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">New Arrivals 2025</p>
        <h1 className="hero-title">
          The Future of Tech
          <br />
          <span className="hero-highlight">Is Here.</span>
        </h1>
        <p className="hero-description">
          Discover the latest in premium technology. From powerful computers
          to cutting-edge smartphones, find everything you need in one place.
        </p>
        <div className="hero-cta">
          <button className="btn-primary">Explore Products</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat">
          <span className="stat-number">200+</span>
          <span className="stat-label">Premium Products</span>
        </div>
        <div className="stat">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Customer Support</span>
        </div>
      </div>
    </section>
  );
}
