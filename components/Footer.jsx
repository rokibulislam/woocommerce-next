const currentYear = new Date().getFullYear();
const Footer = props => (
  <footer className="site__footer" id="mastfoot">
    <div className="container">
      <div className="copyright__text text-center">
        &copy; Copyright {currentYear} by{"Rokib"}
      </div>
    </div>
  </footer>
);

export default Footer;
