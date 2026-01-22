import "./Footer.css";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box className="footer" component="footer">
      <Link href="/aboutUs">About Us</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/termsOfUse">Terms of Use</Link>
      <Typography marginTop={2}>
        &copy; {currentYear} WineShelf. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
