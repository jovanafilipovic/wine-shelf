import "./Footer.css";
import { Link } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <Link href="/aboutUs">About Us</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/termsOfUse">Terms of Use</Link>
      <span className="all-rights">
        &copy; {currentYear} WineShelf. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
