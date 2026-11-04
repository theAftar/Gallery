import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">✦ YOUR VISUAL JOURNEY</span>

        <h1>
          Discover the world
          <br />
          through <span>photography.</span>
        </h1>

        <p>
          Explore beautiful moments, stunning landscapes, and
          extraordinary stories captured through the lens.
        </p>

        <a href="#gallery" className="hero-button">
          Explore Gallery <span>↗</span>
        </a>
      </div>

      <div className="hero-decoration">
        <div className="hero-circle"></div>
        <span className="hero-star">✳</span>
      </div>
    </section>
  );
}

export default Hero;