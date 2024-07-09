import logoBirdBlack from "../../assets/logo/logo-bird-black.png";
import "./FooterLogo.scss";

const FooterLogo = () => {
  return (
    <div className="footer-logo">
      <div className="footer-logo__line"></div>
      <div className="footer-logo__text">PATRIOTS DIVISION</div>
      <img src={logoBirdBlack} alt="Patriots Division Logo" className="footer-logo__logo" />
    </div>
  );
};

export default FooterLogo;