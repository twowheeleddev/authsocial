import { MdAttachMoney, MdContactMail, MdGavel, MdHelp, MdHome, MdInfo, MdLiveHelp, MdSecurity } from "react-icons/md";

export const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
    icon: <MdHome />,
  },
  {
    display: "About Us",
    url: "/about",
    icon: <MdInfo />,
  },
  {
    display: "In Need of Services?",
    url: "/services",
    icon: <MdHelp />,
  },
  {
    display: "Contact Us",
    url: "/contact",
    icon: <MdContactMail />,
  },
];

export const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "/privacy",
    icon: <MdSecurity />, // Icon for Privacy Policy
  },
  {
    display: "Donations Guide",
    url: "/donations",
    icon: <MdAttachMoney />, // Icon for Donations Guide
  },
  {
    display: "Seeking Help?",
    url: "/help",
    icon: <MdLiveHelp />, // Icon for Seeking Help
  },
  {
    display: "Terms of Service",
    url: "/terms",
    icon: <MdGavel />, // Icon for Terms of Service
  },
];

export const resourceLinks = [
  {
    display: "National Alliance to End Homelessness",
    url: "https://endhomelessness.org",
  },
  {
    display: "Homeless Shelters Directory",
    url: "https://www.homelessshelterdirectory.org",
  },
  {
    display: "HUD Exchange Homelessness Assistance",
    url: "https://www.hudexchange.info/homelessness-assistance/",
  },
  {
    display: "The Salvation Army",
    url: "https://www.salvationarmyusa.org",
  },
  {
    display: "United Way",
    url: "https://www.unitedway.org",
  },
];
