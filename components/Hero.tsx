export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="concrete-texture"></div>
        <div className="industrial-grid"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-main">CONCRETE</span>
            <span className="title-sub">RUNNERS</span>
          </h1>
          <p className="hero-description">도시의 콘크리트 위를 달리는 산업적 러닝 크루</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">250+</span>
              <span className="stat-label">MEMBERS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">KM RUN</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">EVENTS</span>
            </div>
          </div>
        </div>
        <div className="hero-cta">
          <button className="cta-primary">JOIN THE CREW</button>
          <button className="cta-secondary">EXPLORE</button>
        </div>
      </div>
    </section>
  )
}
