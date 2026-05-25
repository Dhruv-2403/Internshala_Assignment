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
          <li><a href="#">Internships</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Courses</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <a href="#" className="btn-login">Login</a>
          <a href="#" className="btn-register">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
