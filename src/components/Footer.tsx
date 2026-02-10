import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Superpowered</h3>
            <p>Helping students think better with AI.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigation</h4>
              <a href="#how-it-works">How it works</a>
              <a href="#stories">Stories</a>
              <a href="#about">About</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Elliott Hedman
        </div>
      </div>
    </footer>
  );
};

export default Footer;
