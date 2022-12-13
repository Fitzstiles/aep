import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="icons">
        <FacebookIcon />
        <InstagramIcon />
        <PinterestIcon />
        <LinkedInIcon />
      </div>
      <div className="text">
        <p>Copyright © 2022, Austin's Event Palace.</p>
      </div>
    </div>
  );
};

export default Footer;
