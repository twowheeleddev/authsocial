// src/components/Navbar.jsx

import DesktopNavbar from "./desktop/DesktopNavbar";
import MobileNavbar from "./mobile/MobileNavbar";
import useResponsive from "../../hooks/useResponsive";
import { useTheme } from "../../providers/ThemeProvider";

const Navbar = () => {
  const { isMobile } = useResponsive();
  const { isDarkMode } = useTheme(); // Get the theme mode

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
};

export default Navbar;
