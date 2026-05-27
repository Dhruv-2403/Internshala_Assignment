import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src="/internshala_logo.jpg" alt="Internshala" className="navbar-logo-img" />
        </a>

        {/* Nav Links */}
        <ul className="navbar-links">
          <li className="active">
            <a href="#internships" className="nav-item">
              Internships
              <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#courses" className="nav-item">
              Courses
              <span className="offer-badge">OFFER</span>
              <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#jobs" className="nav-item">
              Jobs
              <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#is-pro" className="nav-item pro-link">
              IS PRO
            </a>
          </li>
        </ul>

        {/* Right Side Icons and Profile */}
        <div className="navbar-right">
          <button className="chat-btn" aria-label="Messages">
            <svg className="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          
          <div className="profile-dropdown">
            <div className="profile-avatar">D</div>
            <svg className="chevron-icon profile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
