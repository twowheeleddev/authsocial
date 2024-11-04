// src/components/Navbar.jsx
import useResponsive from "../../hooks/useResponsive";
import MobileNavbar from "./mobile/MobileNavbar";
import DesktopNavbar from "./desktop/DesktopNavbar";

const Navbar = () => {
  const { isMobile } = useResponsive(); // Check if the screen is mobile

  return (
    <div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
};

export default Navbar;
