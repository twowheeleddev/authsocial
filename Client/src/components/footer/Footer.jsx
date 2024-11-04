// src/components/Footer.jsx
import useResponsive from "../../hooks/useResponsive"; // Use the responsive hook
import MobileFooter from "./mobile/MobileFooter"; // Import the mobile footer
import DesktopFooter from "./desktop/DesktopFooter"; // Import the desktop footer

const Footer = () => {
  const { isMobile, isTablet } = useResponsive(); // Get the current screen size

  return (
    <footer>
      {isMobile || isTablet ? <MobileFooter /> : <DesktopFooter />}
    </footer>
  );
};

export default Footer;
