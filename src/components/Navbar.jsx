import "../styles/Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <span className="logo-icon">◈</span>
        Gallery<span className="logo-dot">.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#gallery">Explore</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search photos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;